<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 relative overflow-hidden">
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>
      
      <div class="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-cyan-500/8 to-transparent rounded-full blur-2xl animate-float-elegant"></div>
      <div class="absolute bottom-32 right-32 w-64 h-64 bg-gradient-to-br from-blue-500/6 to-transparent rounded-full blur-2xl animate-float-elegant" style="animation-delay: 2s;"></div>
      
      <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
      <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </div>

    <div class="relative z-10">
      <!-- Breadcrumb Navigation - Below imported navbar -->
      <div class="pt-16">
        <div class="container mx-auto px-4 sm:px-6 py-4">
          <div class="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-light text-gray-400">
            <button 
              @click="goBack"
              class="flex items-center gap-1 sm:gap-2 hover:text-cyan-400 transition-colors duration-300"
            >
              <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
              <span class="hidden xs:inline">Home</span>
            </button>
            <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
            <button 
              @click="goToProjects"
              class="flex items-center gap-1 sm:gap-2 hover:text-cyan-400 transition-colors duration-300"
            >
              <span>Projects</span>
            </button>
            <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
            <span class="text-white truncate max-w-[120px] xs:max-w-[160px] sm:max-w-none">{{ project?.title || 'Project' }}</span>
          </div>
        </div>
      </div>

      <div v-if="project" class="pb-16">
        <div class="container mx-auto px-4 sm:px-6">
          <!-- Project Header -->
          <div class="text-center mb-12 sm:mb-20">
            <div class="inline-flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <div class="w-8 sm:w-16 h-px bg-gradient-to-r from-transparent to-cyan-400/50"></div>
              <span class="text-cyan-400/80 text-xs sm:text-sm font-light tracking-[0.2em] sm:tracking-[0.3em]">{{ getCategoryName(project.category).toUpperCase() }}</span>
              <div class="w-8 sm:w-16 h-px bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
            </div>
            
            <h1 class="text-3xl sm:text-5xl lg:text-6xl font-light text-white mb-6 sm:mb-8 leading-tight">
              {{ project.title }}
            </h1>
            
            <p class="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light px-4">
              {{ project.fullDescription }}
            </p>
          </div>

          <!-- Main Content Grid -->
          <div class="grid lg:grid-cols-2 gap-8 sm:gap-16 mb-12 sm:mb-20 max-w-6xl mx-auto">
            <!-- Image Gallery -->
            <div class="space-y-4 sm:space-y-6">
              <div class="grid grid-cols-1 gap-4 sm:gap-6">
                <div 
                  v-for="(img, index) in allImages" 
                  :key="index"
                  class="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/20 to-gray-900/20 border border-gray-700/30 cursor-zoom-in hover:border-cyan-400/30 transition-all duration-500"
                  @click="openLightbox(img)"
                >
                  <img 
                    :src="getImageUrl(img)" 
                    :alt="`${project.title} ${index + 1}`"
                    class="w-full h-48 sm:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3 sm:pb-4">
                    <div class="bg-black/50 backdrop-blur-lg rounded-full p-2 sm:p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v0"/>
                      </svg>
                    </div>
                  </div>
                  
                  <!-- Status Badge -->
                  <div v-if="index === 0" class="absolute top-3 sm:top-4 left-3 sm:left-4 flex gap-1 sm:gap-2">
                    <div 
                      :class="[
                        'px-2 sm:px-3 py-1 rounded-full backdrop-blur-lg border text-xs font-medium',
                        project.status === 'public' 
                          ? 'bg-green-500/10 text-green-400 border-green-400/30' 
                          : 'bg-amber-500/10 text-amber-400 border-amber-400/30'
                      ]"
                    >
                      {{ project.status === 'public' ? 'Public' : 'Private' }}
                    </div>
                    <div 
                      v-if="project.featured"
                      class="bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-400 text-xs font-medium px-2 sm:px-3 py-1 rounded-full backdrop-blur-lg border border-amber-400/30"
                    >
                      Featured
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Project Info -->
            <div class="space-y-6 sm:space-y-8">
              <!-- Quick Stats -->
              <div class="grid grid-cols-2 gap-3 sm:gap-4">
                <div class="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800/10 to-gray-900/10 border border-gray-700/30 hover:border-cyan-400/20 transition-all duration-500">
                  <div class="text-xl sm:text-2xl font-light text-cyan-400 mb-1 sm:mb-2">{{ project.year }}</div>
                  <div class="text-gray-400 text-xs sm:text-sm font-light">Year</div>
                </div>
                <div class="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800/10 to-gray-900/10 border border-gray-700/30 hover:border-green-400/20 transition-all duration-500">
                  <div class="text-xl sm:text-2xl font-light text-green-400 mb-1 sm:mb-2">{{ project.completion }}</div>
                  <div class="text-gray-400 text-xs sm:text-sm font-light">Status</div>
                </div>
                <div class="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800/10 to-gray-900/10 border border-gray-700/30 hover:border-purple-400/20 transition-all duration-500">
                  <div class="text-xl sm:text-2xl font-light text-purple-400 mb-1 sm:mb-2">{{ project.duration || 'N/A' }}</div>
                  <div class="text-gray-400 text-xs sm:text-sm font-light">Duration</div>
                </div>
                <div class="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800/10 to-gray-900/10 border border-gray-700/30 hover:border-orange-400/20 transition-all duration-500">
                  <div class="text-xl sm:text-2xl font-light text-orange-400 mb-1 sm:mb-2">{{ project.teamSize || 'Solo' }}</div>
                  <div class="text-gray-400 text-xs sm:text-sm font-light">Team</div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="flex flex-col gap-3 sm:gap-4">
                <button 
                  v-if="project.githubUrl && project.status === 'public'"
                  @click="visitGitHub(project.githubUrl)"
                  class="group w-full flex items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800/20 to-gray-900/20 border border-gray-700/30 hover:border-gray-600/50 text-white hover:text-cyan-400 transition-all duration-500"
                >
                  <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span class="font-light text-sm sm:text-base">View Source Code</span>
                </button>

                <button 
                  v-if="project.demoUrl"
                  @click="visitDemo(project.demoUrl)"
                  class="group w-full flex items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 hover:border-cyan-400/50 text-cyan-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all duration-500"
                >
                  <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                  <span class="font-light text-sm sm:text-base">Live Demo</span>
                </button>
              </div>

              <!-- Tags -->
              <div>
                <h3 class="text-base sm:text-lg font-light text-white mb-3 sm:mb-4">Project Tags</h3>
                <div class="flex flex-wrap gap-1 sm:gap-2">
                  <span 
                    v-for="tag in project.tags" 
                    :key="tag"
                    class="px-2 sm:px-3 py-1 bg-gray-800/30 text-gray-300 rounded-lg text-xs sm:text-sm border border-gray-700/30 font-light"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Detailed Sections -->
          <div class="grid lg:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
            <!-- Main Content -->
            <div class="lg:col-span-2 space-y-8 sm:space-y-12">
              <!-- Technologies Used -->
              <section class="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800/10 to-gray-900/10 border border-gray-700/30">
                <h2 class="text-xl sm:text-2xl font-light text-white mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                  </svg>
                  Technologies & Tools
                </h2>
                <div class="flex flex-wrap gap-2 sm:gap-3">
                  <span 
                    v-for="tech in project.technologies" 
                    :key="tech"
                    class="px-3 py-2 sm:px-4 sm:py-3 bg-cyan-500/10 text-cyan-400 rounded-lg sm:rounded-xl border border-cyan-400/20 hover:bg-cyan-500/20 transition-all duration-300 flex items-center gap-1 sm:gap-2 text-sm sm:text-base font-light"
                  >
                    <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full"></div>
                    {{ tech }}
                  </span>
                </div>
              </section>

              <!-- Key Features -->
              <section class="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800/10 to-gray-900/10 border border-gray-700/30">
                <h2 class="text-xl sm:text-2xl font-light text-white mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Key Features
                </h2>
                <div class="grid md:grid-cols-2 gap-3 sm:gap-4">
                  <div 
                    v-for="(feature, index) in project.features" 
                    :key="feature"
                    class="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-700/10 rounded-lg sm:rounded-xl hover:bg-gray-700/20 transition-colors duration-300"
                  >
                    <div class="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-green-400/20 rounded-full flex items-center justify-center mt-0.5">
                      <span class="text-green-400 text-xs sm:text-sm font-light">{{ index + 1 }}</span>
                    </div>
                    <p class="text-gray-300 leading-relaxed font-light text-sm sm:text-base">{{ feature }}</p>
                  </div>
                </div>
              </section>
            </div>

            <div class="space-y-4 sm:space-y-6">
              <!-- Project Highlights -->
              <div class="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800/10 to-gray-900/10 border border-gray-700/30">
                <h3 class="text-base sm:text-lg font-light text-white mb-3 sm:mb-4 flex items-center gap-2">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                  Project Highlights
                </h3>
                <div class="space-y-2 sm:space-y-3">
                  <div class="flex items-center gap-2 sm:gap-3 text-gray-300 font-light text-sm sm:text-base">
                    <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full"></div>
                    <span>{{ getCategoryName(project.category) }}</span>
                  </div>
                  <div class="flex items-center gap-2 sm:gap-3 text-gray-300 font-light text-sm sm:text-base">
                    <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
                    <span>{{ project.completion }}</span>
                  </div>
                  <div class="flex items-center gap-2 sm:gap-3 text-gray-300 font-light text-sm sm:text-base" v-if="project.duration">
                    <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full"></div>
                    <span>Completed in {{ project.duration }}</span>
                  </div>
                  <div class="flex items-center gap-2 sm:gap-3 text-gray-300 font-light text-sm sm:text-base">
                    <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full"></div>
                    <span>{{ project.teamSize || 'Solo' }} Project</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation between projects -->
          <div class="mt-12 sm:mt-20">
            <div class="flex flex-col lg:flex-row gap-4 sm:gap-6 justify-between items-center">
              <button 
                v-if="previousProject"
                @click="navigateToProject(previousProject.id)"
                class="group flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800/20 to-gray-900/20 border border-gray-700/30 hover:border-cyan-400/30 text-white hover:text-cyan-400 transition-all duration-500 w-full lg:w-auto lg:min-w-[300px] xl:min-w-[400px]"
              >
                <div class="flex items-center gap-3 sm:gap-4 flex-1">
                  <div class="relative">
                    <img 
                      :src="getImageUrl(previousProject.image)" 
                      :alt="previousProject.title"
                      class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-lg sm:rounded-xl object-cover border border-gray-600/30 group-hover:border-cyan-400/40 transition-all duration-300"
                      loading="lazy"
                    />
                    <div class="absolute -left-1 -top-1 sm:-left-2 sm:-top-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600/30 flex items-center justify-center">
                      <svg class="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                      </svg>
                    </div>
                  </div>
                  <div class="text-left flex-1">
                    <p class="text-xs sm:text-sm text-gray-400 font-light mb-1">Previous Project</p>
                    <p class="font-light text-base sm:text-lg lg:text-xl truncate">{{ previousProject.title }}</p>
                    <p class="text-gray-400 text-xs sm:text-sm font-light mt-1 line-clamp-2 hidden sm:block">{{ previousProject.description }}</p>
                  </div>
                </div>
              </button>

              <button 
                v-if="nextProject"
                @click="navigateToProject(nextProject.id)"
                class="group flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800/20 to-gray-900/20 border border-gray-700/30 hover:border-cyan-400/30 text-white hover:text-cyan-400 transition-all duration-500 w-full lg:w-auto lg:min-w-[300px] xl:min-w-[400px]"
              >
                <div class="flex items-center gap-3 sm:gap-4 flex-1">
                  <div class="text-left flex-1">
                    <p class="text-xs sm:text-sm text-gray-400 font-light mb-1">Next Project</p>
                    <p class="font-light text-base sm:text-lg lg:text-xl truncate">{{ nextProject.title }}</p>
                    <p class="text-gray-400 text-xs sm:text-sm font-light mt-1 line-clamp-2 hidden sm:block">{{ nextProject.description }}</p>
                  </div>
                  <div class="relative">
                    <img 
                      :src="getImageUrl(nextProject.image)" 
                      :alt="nextProject.title"
                      class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-lg sm:rounded-xl object-cover border border-gray-600/30 group-hover:border-cyan-400/40 transition-all duration-300"
                      loading="lazy"
                    />
                    <div class="absolute -right-1 -top-1 sm:-right-2 sm:-top-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600/30 flex items-center justify-center">
                      <svg class="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div v-else class="flex items-center justify-center min-h-screen pt-16">
        <div class="text-center">
          <div class="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-b-2 border-cyan-400 mx-auto mb-3 sm:mb-4"></div>
          <p class="text-gray-400 text-base sm:text-lg font-light">Loading project details...</p>
        </div>
      </div>

      <!-- Lightbox -->
      <div 
        v-if="lightboxOpen" 
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg"
        @click="closeLightbox"
      >
        <div class="relative max-w-4xl max-h-[90vh] mx-2 sm:mx-4">
          <button 
            @click="closeLightbox"
            class="absolute -top-8 sm:-top-12 right-0 text-white hover:text-cyan-400 transition-colors duration-300"
          >
            <svg class="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <img 
            :src="getImageUrl(lightboxImage)" 
            :alt="project.title"
            class="w-full h-auto max-h-[80vh] object-contain rounded-xl sm:rounded-2xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projectsData } from '../../data/projects.js'

const route = useRoute()
const router = useRouter()
const project = ref(null)
const lightboxOpen = ref(false)
const lightboxImage = ref('')

const loadProject = (projectId) => {
  const foundProject = projectsData.find(p => p.id === projectId)
  
  if (foundProject) {
    project.value = foundProject
    // Scroll to top when project changes
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    router.push('/')
  }
}

const currentProjectIndex = computed(() => {
  if (!project.value) return -1
  return projectsData.findIndex(p => p.id === project.value.id)
})

const previousProject = computed(() => {
  const index = currentProjectIndex.value
  return index > 0 ? projectsData[index - 1] : null
})

const nextProject = computed(() => {
  const index = currentProjectIndex.value
  return index < projectsData.length - 1 ? projectsData[index + 1] : null
})

const allImages = computed(() => {
  if (!project.value) return []
  const images = [project.value.image]
  if (project.value.additionalImages) {
    return images.concat(project.value.additionalImages)
  }
  return images
})

const getImageUrl = (imageName) => {
  return new URL(`../../assets/images/projects/${imageName}`, import.meta.url).href
}

const getCategoryName = (categoryId) => {
  const categories = {
    'web': 'Web Application',
    'desktop': 'Desktop Application',
    'mobile': 'Mobile Application',
    'game': 'Game Development'
  }
  return categories[categoryId] || categoryId
}

const openLightbox = (img) => {
  lightboxImage.value = img
  lightboxOpen.value = true
}

const closeLightbox = () => {
  lightboxOpen.value = false
}

const goBack = () => {
  router.push('/')
}

const goToProjects = () => {
  router.push('/')
  setTimeout(() => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, 100)
}

const navigateToProject = (projectId) => {
  router.push(`/projects/${projectId}`)
}

const visitGitHub = (url) => {
  window.open(url, '_blank')
}

const visitDemo = (url) => {
  window.open(url, '_blank')
}

watch(
  () => route.params.id,
  (newId) => {
    const projectId = parseInt(newId)
    loadProject(projectId)
  }
)

onMounted(() => {
  const projectId = parseInt(route.params.id)
  loadProject(projectId)
})
</script>

<style scoped>
.animate-float-elegant {
  animation: float-elegant 6s ease-in-out infinite;
}

@keyframes float-elegant {
  0%, 100% { 
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  50% { 
    transform: translate(20px, -20px) scale(1.05);
    opacity: 0.5;
  }
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}

::-webkit-scrollbar-thumb {
  background: rgba(6, 182, 212, 0.3);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(6, 182, 212, 0.5);
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Optimize for mobile performance */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
}

/* Extra small screens */
@media (max-width: 475px) {
  .container {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
}
</style>