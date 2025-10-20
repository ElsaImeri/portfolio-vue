<template>
  <section id="projects" class="py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black">
    <div class="absolute inset-0">
      <div class="absolute top-10 left-5% w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-10 right-5% w-70 h-70 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 2s;"></div>
    </div>

    <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-2xl px-4 py-2 mb-6">
          <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
          </svg>
          <span class="text-sm font-medium text-gray-300">My Portfolio</span>
        </div>
        
        <h2 class="text-4xl lg:text-6xl font-bold text-white mb-6">
          Featured 
          <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        
        <p class="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          A collection of my recent work showcasing expertise in modern web technologies, 
          innovative solutions, and attention to detail.
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="setActiveCategory(category.id)"
          :class="[
            'px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 border-2 backdrop-blur-lg',
            activeCategory === category.id
              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-400/50 shadow-lg shadow-cyan-500/25 transform -translate-y-1'
              : 'bg-gray-800/30 text-gray-300 border-gray-700/50 hover:border-cyan-400/30 hover:text-cyan-400'
          ]"
        >
          <span class="flex items-center gap-2">
            <component :is="category.icon" class="w-4 h-4" />
            {{ category.name }}
          </span>
        </button>
      </div>

      <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
        <div 
          v-for="(project, index) in displayedProjects" 
          :key="project.id"
          class="group relative bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-3xl overflow-hidden hover:border-cyan-400/30 transition-all duration-500 transform hover:-translate-y-2"
          :style="`animation-delay: ${index * 0.1}s`"
        >
          <div class="relative h-48 overflow-hidden">
            <img 
              :src="getImageUrl(project.image)" 
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              @error="handleImageError"
            />
            
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60"></div>
            
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div class="absolute bottom-4 left-4 right-4">
                <div class="flex gap-2 flex-wrap">
                  <span 
                    v-for="tech in project.technologies.slice(0, 3)" 
                    :key="tech"
                    class="px-2 py-1 bg-gray-800/80 backdrop-blur-lg text-xs text-cyan-400 rounded-lg border border-cyan-400/20"
                  >
                    {{ tech }}
                  </span>
                  <span 
                    v-if="project.technologies.length > 3"
                    class="px-2 py-1 bg-gray-800/80 backdrop-blur-lg text-xs text-gray-400 rounded-lg border border-gray-600/20"
                  >
                    +{{ project.technologies.length - 3 }}
                  </span>
                </div>
              </div>
            </div>

            <div class="absolute top-4 left-4 right-4 flex justify-between items-start">
              <div class="flex flex-col gap-2">
                <div 
                  :class="[
                    'px-3 py-1 rounded-full backdrop-blur-lg border text-xs font-bold',
                    project.status === 'public' 
                      ? 'bg-green-500/20 text-green-400 border-green-400/30' 
                      : 'bg-amber-500/20 text-amber-400 border-amber-400/30'
                  ]"
                >
                  {{ project.status === 'public' ? 'Public' : 'Private' }}
                </div>
                
                <div 
                  v-if="project.featured"
                  class="bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-lg border border-amber-400/30"
                >
                  Featured
                </div>
              </div>

              <div class="bg-gray-800/80 backdrop-blur-lg text-white text-xs font-semibold px-3 py-1 rounded-full border border-gray-600/50">
                {{ getCategoryName(project.category) }}
              </div>
            </div>
          </div>

          <div class="p-6">
            <div class="mb-3">
              <h3 
                @click="openProjectDetails(project)"
                class="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 cursor-pointer inline-flex items-center gap-1 hover:gap-2"
              >
                {{ project.title }}
                <svg class="w-4 h-4 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </h3>
              
              <!-- Tags -->
              <div class="flex gap-2 mt-2">
                <span 
                  v-for="tag in project.tags.slice(0, 2)" 
                  :key="tag"
                  class="px-2 py-1 bg-gray-700/50 text-xs text-gray-300 rounded-lg"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <p class="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
              {{ project.description }}
            </p>

            <!-- Project Stats -->
            <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
              <div class="flex items-center gap-4">
                <div class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  {{ project.year }}
                </div>
                <div class="flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  {{ project.completion }}
                </div>
              </div>
              <div class="text-cyan-400 font-semibold text-xs">
                {{ getCategoryName(project.category) }}
              </div>
            </div>

            <div class="flex gap-3">
              <button 
                v-if="project.githubUrl && project.status === 'public'"
                @click="visitGitHub(project.githubUrl)"
                class="flex-1 py-2 px-4 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 bg-gray-700/50 text-white hover:bg-gray-600/50 hover:shadow-lg hover:shadow-gray-500/25 border border-gray-600/50"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </button>

              <button 
                v-if="project.demoUrl"
                @click="visitDemo(project.demoUrl)"
                class="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                Live Demo
              </button>

              <button 
                @click="openProjectDetails(project)"
                class="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
                Details
              </button>
            </div>
          </div>

          <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
        </div>
      </div>

      <div 
        v-if="filteredProjects.length === 0" 
        class="text-center py-12"
      >
        <div class="text-gray-400 text-lg">
          No projects found in this category.
        </div>
        <button 
          @click="setActiveCategory('all')"
          class="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
        >
          Show all projects
        </button>
      </div>

      <div v-if="filteredProjects.length > 0" class="flex flex-col items-center gap-8">
        <div class="flex flex-col sm:flex-row gap-4">
          <button 
            v-if="hasMoreProjects"
            @click="loadMoreProjects"
            class="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <span class="flex items-center justify-center gap-3">
              Load More Projects
              <svg class="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
            </span>
          </button>

          <button 
            v-if="showViewLess"
            @click="viewLessProjects"
            class="group border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 backdrop-blur-lg hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <span class="flex items-center justify-center gap-3">
              View Less
              <svg class="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
              </svg>
            </span>
          </button>

          <button 
            v-if="!showAllProjects && filteredProjects.length > projectsPerLoad"
            @click="showAllProjects"
            class="group border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-lg"
          >
            <span class="flex items-center justify-center gap-3">
              Show All Projects
              <svg class="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"/>
              </svg>
            </span>
          </button>
        </div>

        <div class="text-center text-gray-400 text-sm">
          Showing {{ displayedProjects.length }} of {{ filteredProjects.length }} projects
          <span v-if="showAllProjects" class="text-cyan-400 font-semibold"> • All projects visible</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { projectsData } from '@/data/projects.js'

const router = useRouter()

const GlobeIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
  </svg>`
}

const DesktopIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>`
}

const MobileIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
  </svg>`
}

const GameIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>`
}

const AllIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
  </svg>`
}

const categories = ref([
  { id: 'all', name: 'All Projects', icon: AllIcon },
  { id: 'web', name: 'Web Apps', icon: GlobeIcon },
  { id: 'desktop', name: 'Desktop', icon: DesktopIcon },
  { id: 'mobile', name: 'Mobile', icon: MobileIcon },
  { id: 'game', name: 'Games', icon: GameIcon }
])

const activeCategory = ref('all')
const projects = ref(projectsData)
const visibleProjectsCount = ref(6)
const projectsPerLoad = ref(6)
const showAllProjectsFlag = ref(false)

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return projects.value
  }
  return projects.value.filter(project => project.category === activeCategory.value)
})

const displayedProjects = computed(() => {
  if (showAllProjectsFlag.value) {
    return filteredProjects.value
  }
  return filteredProjects.value.slice(0, visibleProjectsCount.value)
})

const hasMoreProjects = computed(() => {
  return !showAllProjectsFlag.value && visibleProjectsCount.value < filteredProjects.value.length
})

const showViewLess = computed(() => {
  return !showAllProjectsFlag.value && visibleProjectsCount.value > projectsPerLoad.value
})

const getImageUrl = (imageName) => {
  return new URL(`../../assets/images/projects/${imageName}`, import.meta.url).href
}

const handleImageError = (event) => {
  console.error('Image failed to load:', event.target.src)
  event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjM0EzQTNBIi8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzk5OTk5OSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4Ij5Qcm9qZWN0IEltYWdlPC90ZXh0Pgo8L3N2Zz4K'
}

const setActiveCategory = (categoryId) => {
  activeCategory.value = categoryId
  visibleProjectsCount.value = projectsPerLoad.value
  showAllProjectsFlag.value = false
}

const getCategoryName = (categoryId) => {
  const category = categories.value.find(cat => cat.id === categoryId)
  return category ? category.name : categoryId
}

const openProjectDetails = (project) => {
  router.push(`/projects/${project.id}`)
}

const visitDemo = (url) => {
  if (url) {
    window.open(url, '_blank')
  }
}

const visitGitHub = (url) => {
  if (url) {
    window.open(url, '_blank')
  }
}

const loadMoreProjects = () => {
  visibleProjectsCount.value += projectsPerLoad.value
  if (visibleProjectsCount.value >= filteredProjects.value.length) {
    visibleProjectsCount.value = filteredProjects.value.length
  }
}

const viewLessProjects = () => {
  visibleProjectsCount.value = projectsPerLoad.value
}

const showAllProjects = () => {
  showAllProjectsFlag.value = true
  visibleProjectsCount.value = filteredProjects.value.length
}

onMounted(() => {
  visibleProjectsCount.value = projectsPerLoad.value
  showAllProjectsFlag.value = false
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.grid > div {
  animation: fadeInUp 0.6s ease-out both;
}
</style>