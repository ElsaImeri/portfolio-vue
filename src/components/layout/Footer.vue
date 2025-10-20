<template>
  <footer class="relative bg-gradient-to-br from-gray-950 via-black to-gray-900 border-t border-gray-800/30">
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>
      
      <!-- Floating Elegant Elements -->
      <div class="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-cyan-500/8 to-transparent rounded-full blur-2xl animate-float-elegant"></div>
      <div class="absolute bottom-32 right-32 w-64 h-64 bg-gradient-to-br from-blue-500/6 to-transparent rounded-full blur-2xl animate-float-elegant" style="animation-delay: 2s;"></div>
      
      <!-- Subtle Lines -->
      <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
      <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Main Content -->
      <div class="py-20">
        <!-- CTA Section -->
        <div class="text-center mb-20">
          <div class="inline-flex items-center gap-3 mb-8">
            <div class="w-16 h-px bg-gradient-to-r from-transparent to-cyan-400/50"></div>
            <span class="text-cyan-400/80 text-sm font-light tracking-[0.3em]">LET'S COLLABORATE</span>
            <div class="w-16 h-px bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
          </div>
          
          <h2 class="text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
            Ready to Create
            <span class="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-normal">Together</span>
          </h2>
          
          <p class="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light mb-12">
            Let's bring your vision to life with innovative solutions and exceptional craftsmanship.
          </p>

          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              @click="navigateToSection('contact')"
              class="group relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 px-8 rounded-xl font-medium hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-1 overflow-hidden"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

              <span class="relative z-10 flex items-center justify-center gap-3">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                <span>Start Project</span>
              </span>
            </button>

            <a 
              :href="`tel:${phoneNumber}`"
              class="group flex items-center gap-3 px-8 py-4 rounded-xl border border-gray-700/30 text-gray-300 font-medium hover:border-cyan-400/40 hover:text-cyan-400 transition-all duration-500 backdrop-blur-sm"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
              </svg>
              <span>Call Now</span>
            </a>
          </div>
        </div>

        <!-- Links Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <!-- Brand -->
          <div class="lg:col-span-2">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 flex items-center justify-center">
                <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
              </div>
              <div>
                <span class="text-2xl font-light text-white block">Elsa Imeri</span>
                <p class="text-cyan-400 text-sm">Full-Stack Developer</p>
              </div>
            </div>
            <p class="text-gray-400 leading-relaxed max-w-md">
              Crafting digital experiences with modern technologies, clean code, and innovative solutions.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-white font-light text-lg mb-6">Navigation</h3>
            <div class="space-y-4">
              <button 
                v-for="link in navigation" 
                :key="link.name"
                @click="navigateToSection(link.section)"
                class="block text-gray-400 hover:text-cyan-400 transition-all duration-300 group transform hover:translate-x-2 w-full text-left"
              >
                <span class="flex items-center gap-3">
                  <div class="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span>{{ link.name }}</span>
                </span>
              </button>
            </div>
          </div>

          <!-- Connect -->
          <div>
            <h3 class="text-white font-light text-lg mb-6">Connect</h3>
            <div class="space-y-4">
              <a v-for="social in socialLinks" :key="social.name"
                 :href="social.url"
                 target="_blank"
                 class="group flex items-center gap-4 p-4 rounded-xl border border-gray-700/30 hover:border-cyan-400/40 bg-gradient-to-r from-gray-800/5 to-transparent hover:from-cyan-500/5 transition-all duration-500">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <svg class="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                    <path v-if="social.name === 'GitHub'" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    <path v-else-if="social.name === 'LinkedIn'" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <div class="text-white font-medium text-sm">{{ social.name }}</div>
                  <div class="text-cyan-400 text-xs">{{ social.handle }}</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="p-8 rounded-3xl border border-gray-700/30 bg-gradient-to-br from-gray-800/10 to-gray-900/10 backdrop-blur-sm mb-12">
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Email -->
            <a href="mailto:elsaimeri478@gmail.com?subject=Project Collaboration Inquiry&body=Hello Elsa, I would like to discuss a potential project collaboration with you." 
               class="group flex items-center gap-6 p-6 rounded-2xl border border-gray-700/30 hover:border-cyan-400/40 bg-gradient-to-r from-gray-800/10 to-transparent hover:from-cyan-500/5 transition-all duration-500 ease-out">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div class="flex-1">
                <div class="text-white font-medium text-lg mb-1">Email</div>
                <div class="text-cyan-400">elsaimeri478@gmail.com</div>
              </div>
            </a>

            <!-- Phone -->
            <a 
              :href="`tel:${phoneNumber}`"
              class="group flex items-center gap-6 p-6 rounded-2xl border border-gray-700/30 hover:border-blue-400/40 bg-gradient-to-r from-gray-800/10 to-transparent hover:from-blue-500/5 transition-all duration-500 ease-out"
            >
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                </svg>
              </div>
              <div class="flex-1">
                <div class="text-white font-medium text-lg mb-1">Phone</div>
                <div class="text-blue-400">+383 46 187 249</div>
              </div>
            </a>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-gray-700/30 pt-8">
          <div class="flex flex-col lg:flex-row justify-between items-center gap-6">
            <!-- Copyright -->
            <div class="text-gray-500 text-sm text-center lg:text-left">
              © 2025 Elsa Imeri. All rights reserved.
            </div>

            <!-- Tech Stack -->
            <div class="flex items-center gap-4 text-gray-500 text-sm">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available for new projects</span>
              </div>
            </div>

            <div class="flex gap-6 text-sm text-gray-500">
              <a href="#" class="hover:text-cyan-400 transition-colors duration-300">Privacy</a>
              <a href="#" class="hover:text-cyan-400 transition-colors duration-300">Terms</a>
              <a href="#" class="hover:text-cyan-400 transition-colors duration-300">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const phoneNumber = '+38345187249'

const navigation = ref([
  { name: 'Home', section: 'home' },
  { name: 'About', section: 'about' },
  { name: 'Skills', section: 'skills' },
  { name: 'Projects', section: 'projects' },
  { name: 'Contact', section: 'contact' }
])

const socialLinks = ref([
  {
    name: 'GitHub',
    handle: '@ElsaImeri',
    url: 'https://github.com/ElsaImeri'
  },
  {
    name: 'LinkedIn',
    handle: 'in/elsa-imeri',
    url: 'https://www.linkedin.com/in/elsa-imeri-953b7b323'
  }
])

const navigateToSection = (sectionId) => {
  if (route.path.startsWith('/projects/')) {
    router.push('/')
    setTimeout(() => {
      scrollToSection(sectionId)
    }, 100)
  } else {
    scrollToSection(sectionId)
  }
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
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
</style>