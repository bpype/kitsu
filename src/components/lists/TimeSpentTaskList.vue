<template>
  <div class="data-list">
    <table-info :is-loading="isLoading" :is-error="isError" />

    <div class="aggregated-time-spents">
      <div
        :key="projectId"
        class="by-project"
        v-for="projectId in Object.keys(projects)"
      >
        <production-name
          :production="{
            id: projectId,
            name: projectNames[projectId]
          }"
          v-if="projectNames[projectId]"
        />

        <div
          :key="taskTypeId"
          class="by-task-type-id"
          v-for="taskTypeId in Object.keys(projects[projectId])"
        >
          <task-type-name :task-type="taskTypeMap.get(taskTypeId)" />

          <div class="table-body">
            <table class="datatable">
              <tbody class="datatable-body">
                <tr
                  :key="task.id"
                  class="by-task-type-id datatable-row"
                  v-for="task in projects[projectId][taskTypeId]"
                >
                  <router-link :to="getTaskPath(task)">
                    <td class="name">
                      {{ task.name }}
                    </td>
                    <td class="duration">{{ task.duration / 60 }}</td>
                  </router-link>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { firstBy } from 'thenby'

import { sortByName } from '@/lib/sorting'
import { getTaskPath } from '@/lib/path'

import ProductionName from '@/components/widgets/ProductionName.vue'
import TableInfo from '@/components/widgets/TableInfo.vue'
import TaskTypeName from '@/components/widgets/TaskTypeName.vue'

export default {
  name: 'time-spent-task-list',

  components: {
    TableInfo,
    ProductionName,
    TaskTypeName
  },

  data() {
    return {
      projectNames: {}
    }
  },

  props: {
    tasks: {
      type: Array,
      default: () => []
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    isError: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    ...mapGetters(['productionMap', 'taskTypeMap']),

    projects() {
      const projects = {}
      const tasks = [...this.tasks].sort(firstBy('project_name'))

      tasks.forEach(task => {
        if (!projects[task.project_id]) projects[task.project_id] = {}
        if (!projects[task.project_id][task.task_type_id]) {
          projects[task.project_id][task.task_type_id] = []
        }

        let name = task.entity_name
        if (['Shot', 'Sequence'].includes(task.entity_type_name)) {
          name = `${task.sequence_name} / ${name}`
          if (task.episode_name) name = `${task.episode_name} / ${name}`
        } else {
          name = `${task.entity_type_name} / ${name}`
        }

        projects[task.project_id][task.task_type_id].push({
          id: task.task_id,
          project_id: task.project_id,
          task_type_id: task.task_type_id,
          name: name,
          duration: task.duration
        })
      })

      Object.keys(projects).forEach(projectId => {
        Object.keys(projects[projectId]).forEach(taskTypeId => {
          projects[projectId][taskTypeId] = sortByName(
            projects[projectId][taskTypeId]
          )
        })
      })

      return projects
    }
  },

  methods: {
    getTaskPath(task) {
      const project = this.productionMap.get(task.project_id)
      if (!project || project.project_status_name === 'Closed') {
        return ''
      }
      const isTVShow = project.production_type === 'tvshow'
      const episode = { id: project.first_episode_id }
      return getTaskPath(task, null, isTVShow, episode, this.taskTypeMap)
    }
  },

  watch: {
    tasks() {
      this.projectNames = this.tasks.reduce((projectNames, task) => {
        const production = this.productionMap.get(task.project_id)
        const suffix =
          production?.project_status_name === 'Closed' ? ' (closed)' : ''
        projectNames[task.project_id] = task.project_name + suffix
        return projectNames
      }, {})
    }
  }
}
</script>

<style lang="scss" scoped>
.dark .table {
  border-color: $dark-grey;
}

.name {
  width: 300px;
}

.duration {
  text-align: right;
}

.data-list {
  padding-right: 1em;
}

.table {
  border-top: 1px solid $light-grey;
  border-bottom: 1px solid $light-grey;
  margin-bottom: 1em;
  margin-top: 0.5em;
}

.by-task-type-id {
  margin-top: 1em;
  padding-left: 1em;
}

.by-project {
  margin-bottom: 2em;
}

a {
  color: var(--text);
}
</style>
