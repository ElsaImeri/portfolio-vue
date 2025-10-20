<template>
  <nav class="fixed top-0 w-full z-50 transition-all duration-500"
       :class="[
         scrolled 
           ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50 py-2' 
           : 'bg-transparent py-4'
       ]">
    <div class="container mx-auto px-6">
      <div class="flex items-center justify-between">
        
        <button @click="goToHome" class="flex items-center space-x-3 group cursor-pointer">
          <div class="relative">
            <div class="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-500">
              <span class="text-white font-bold text-sm">E</span>
            </div>
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl blur-sm opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
          </div>
          <span class="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Elsa
          </span>
        </button>

        <div class="hidden lg:flex items-center space-x-1 bg-gray-800/50 backdrop-blur-lg rounded-2xl p-1 border border-gray-700/50">
          <button 
            v-for="item in navigation" 
            :key="item.name"
            class="px-6 py-2 rounded-xl font-medium transition-all duration-300 relative group"
            :class="[
              activeSection === item.name.toLowerCase() 
                ? 'text-white' 
                : 'text-gray-300 hover:text-white'
            ]"
            @click="navigateToSection(item.name.toLowerCase())"
          >
            {{ item.name }}
            <span class="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  :class="{ 'opacity-100': activeSection === item.name.toLowerCase() }"></span>
            <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
                  :class="[
                    activeSection === item.name.toLowerCase() 
                      ? 'w-3/4' 
                      : 'w-0 group-hover:w-3/4'
                  ]"></span>
          </button>
        </div>

        <div class="flex items-center space-x-4">
          
          <a href="/path-to-your-cv.pdf" download
             class="hidden md:flex items-center space-x-2 px-4 py-2 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300 group">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <span>CV</span>
          </a>

          <button class="relative group hidden lg:block" @click="navigateToSection('contact')">
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-2xl font-medium hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-0.5">
              Let's Connect
            </div>
          </button>

          <button class="lg:hidden p-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300"
                  @click="isMobileMenuOpen = !isMobileMenuOpen">
            <div class="w-6 h-6 relative">
              <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-current transition-all duration-300"
                    :class="{ 'rotate-45 translate-y-0': isMobileMenuOpen, '-translate-y-1.5': !isMobileMenuOpen }"></span>
              <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-current transition-all duration-300"
                    :class="{ 'opacity-0': isMobileMenuOpen }"></span>
              <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-current transition-all duration-300"
                    :class="{ '-rotate-45 translate-y-0': isMobileMenuOpen, 'translate-y-1.5': !isMobileMenuOpen }"></span>
            </div>
          </button>
        </div>
      </div>

      <div class="lg:hidden overflow-hidden transition-all duration-500"
           :class="{ 'max-h-0': !isMobileMenuOpen, 'max-h-96 py-4': isMobileMenuOpen }">
        <div class="bg-gray-800/95 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-4 mt-4">
          <div class="flex flex-col space-y-2">
            <button 
              v-for="item in navigation" 
              :key="item.name"
              class="px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center"
              :class="[
                activeSection === item.name.toLowerCase() 
                  ? 'text-white bg-cyan-500/10 border border-cyan-500/20' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              ]"
              @click="navigateToSection(item.name.toLowerCase()); isMobileMenuOpen = false"
            >
              {{ item.name }}
              <span v-if="activeSection === item.name.toLowerCase()" class="ml-2 w-2 h-2 bg-cyan-400 rounded-full"></span>
            </button>
            <a href="/path-to-your-cv.pdf" download
               class="flex items-center space-x-2 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-gray-700/50 font-medium transition-all duration-300"
               @click="isMobileMenuOpen = false">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const props = defineProps({
  navigation: Array
})

const scrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = ref('home')

const goToHome = () => {
  if (route.path !== '/') {
    router.push('/')
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setActiveSection('home')
  }
}

const navigateToSection = (section) => {
  if (route.path.startsWith('/projects/')) {
    router.push('/')
    setTimeout(() => {
      scrollToSection(section)
    }, 100)
  } else {
    scrollToSection(section)
  }
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(sectionId)
  }
}

const setActiveSection = (section) => {
  activeSection.value = section
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
  
  if (route.path === '/') {
    const sections = props.navigation.map(item => item.name.toLowerCase())
    
    let currentSection = 'home'
    
    sections.forEach(section => {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section
        }
      }
    })
    
    activeSection.value = currentSection
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>