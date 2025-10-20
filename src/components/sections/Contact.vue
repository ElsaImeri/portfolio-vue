<template>
  <section id="contact" class="py-28 bg-gradient-to-br from-gray-950 via-black to-gray-900 relative overflow-hidden">
    <!-- Elegant Background -->
    <div class="absolute inset-0">
      <!-- Subtle Grid -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>
      
      <!-- Floating  Elements -->
      <div class="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-cyan-500/8 to-transparent rounded-full blur-2xl animate-float-elegant"></div>
      <div class="absolute bottom-32 right-32 w-64 h-64 bg-gradient-to-br from-blue-500/6 to-transparent rounded-full blur-2xl animate-float-elegant" style="animation-delay: 2s;"></div>
      
      <!-- Subtle Lines -->
      <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
      <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Sophisticated Header -->
      <div class="text-center mb-24">
        <div class="inline-flex items-center gap-3 mb-8">
          <div class="w-16 h-px bg-gradient-to-r from-transparent to-cyan-400/50"></div>
          <span class="text-cyan-400/80 text-sm font-light tracking-[0.3em]">GET IN TOUCH</span>
          <div class="w-16 h-px bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
        </div>
        
        <h2 class="text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
          Let's Create Something
          <span class="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-normal">Beautiful</span>
        </h2>
        
        <p class="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
          Your vision deserves exceptional execution. Let's bring it to life together.
        </p>
      </div>

      <div class="grid xl:grid-cols-2 gap-20 items-start max-w-6xl mx-auto">
        
        <!-- Contact Information -->
        <div class="space-y-8">
          <!-- Introduction -->
          <div class="text-left mb-12">
            <h3 class="text-3xl font-light text-white mb-6">Start the Conversation</h3>
            <p class="text-gray-400 leading-relaxed text-lg">
              Whether you have a project in mind or just want to explore possibilities, 
              I'm here to listen and collaborate. Let's create something remarkable.
            </p>
          </div>

          <!-- Contact Methods  -->
          <div class="space-y-6">
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
              <div class="text-cyan-400/50 group-hover:text-cyan-400 transform group-hover:translate-x-1 transition-all duration-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </div>
            </a>

            <!-- Social Links -->
            <div class="grid grid-cols-2 gap-4">
              <!-- GitHub -->
              <a href="https://github.com/ElsaImeri" target="_blank"
                 class="group p-6 rounded-2xl border border-gray-700/30 hover:border-purple-400/40 bg-gradient-to-br from-gray-800/10 to-transparent hover:from-purple-500/5 transition-all duration-500 text-center">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-500">
                  <svg class="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div class="text-white font-medium">GitHub</div>
                <div class="text-gray-400 text-sm mt-1">@ElsaImeri</div>
              </a>

              <!-- LinkedIn -->
              <a href="https://www.linkedin.com/in/elsa-imeri-953b7b323" target="_blank"
                 class="group p-6 rounded-2xl border border-gray-700/30 hover:border-blue-400/40 bg-gradient-to-br from-gray-800/10 to-transparent hover:from-blue-500/5 transition-all duration-500 text-center">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-500">
                  <svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div class="text-white font-medium">LinkedIn</div>
                <div class="text-gray-400 text-sm mt-1">Elsa Imeri</div>
              </a>
            </div>
          </div>

          <!-- Availability -->
          <div class="p-6 rounded-2xl border border-green-400/20 bg-gradient-to-r from-green-500/5 to-emerald-500/5">
            <div class="flex items-center gap-4">
              <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div>
                <div class="text-white font-medium">Available for new projects</div>
                <div class="text-green-400 text-sm">Quick response guaranteed</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="p-10 rounded-3xl border border-gray-700/30 bg-gradient-to-br from-gray-800/10 to-gray-900/10 backdrop-blur-sm">
          <div class="mb-8">
            <h3 class="text-3xl font-light text-white mb-3">Send a Message</h3>
            <p class="text-gray-400">Tell me about your project and let's make it happen.</p>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="group">
                <label class="block text-gray-300 text-sm font-medium mb-3">Your Name</label>
                <input 
                  v-model="form.name"
                  type="text" 
                  required
                  class="w-full bg-gray-800/20 border border-gray-600/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-gray-800/30 transition-all duration-300"
                  placeholder="Your name"
                >
              </div>
              <div class="group">
                <label class="block text-gray-300 text-sm font-medium mb-3">Email Address</label>
                <input 
                  v-model="form.email"
                  type="email" 
                  required
                  class="w-full bg-gray-800/20 border border-gray-600/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-gray-800/30 transition-all duration-300"
                  placeholder="your@email.com"
                >
              </div>
            </div>

            <div class="group">
              <label class="block text-gray-300 text-sm font-medium mb-3">Subject</label>
              <input 
                v-model="form.subject"
                type="text" 
                required
                class="w-full bg-gray-800/20 border border-gray-600/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-gray-800/30 transition-all duration-300"
                placeholder="Project discussion"
              >
            </div>

            <div class="group">
              <label class="block text-gray-300 text-sm font-medium mb-3">Message</label>
              <textarea 
                v-model="form.message"
                required
                rows="5"
                class="w-full bg-gray-800/20 border border-gray-600/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-gray-800/30 transition-all duration-300 resize-none"
                placeholder="Describe your project or inquiry..."
              ></textarea>
            </div>

            <button 
              type="submit"
              :disabled="isSubmitting"
              class="w-full group relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-xl font-medium hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
            >
              <!-- Shine Effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

              <span class="relative z-10 flex items-center justify-center gap-2">
                <svg v-if="isSubmitting" class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2v4m0 12v4m8-10h-4M6 12H2m15.364-7.364l-2.828 2.828M7.464 17.536L4.636 20.364M17.536 7.464l2.828-2.828M4.636 3.636l2.828 2.828"/>
                </svg>
                <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
              </span>
            </button>

            <div v-if="showSuccess" class="p-4 rounded-xl border border-green-400/30 bg-green-500/10 text-green-400 text-center animate-fade-in">
              Message sent successfully! I'll get back to you soon.
            </div>
          </form>
        </div>
      </div>

      <!-- Footer Note -->
      <div class="text-center mt-20 pt-8 border-t border-gray-700/30">
        <p class="text-gray-500 text-sm">
          Looking forward to hearing from you • Typically respond within 2 hours
        </p>
      </div>
    </div>

    <!--  Dialog Box -->
    <div v-if="showDialog" class="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-md animate-fade-in">
      <div class="relative max-w-md w-full">
        <!-- Background Glow -->
        <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-purple-500/5 rounded-3xl blur-xl scale-105"></div>
        
        <!-- Main Dialog -->
        <div class="relative p-8 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-gray-900/95 to-gray-800/95 shadow-2xl shadow-cyan-500/10 animate-scale-in">
          
          <!--  Header Badge -->
          <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <div class="px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border border-cyan-400/30 shadow-lg">
              <span class="text-white text-xs font-medium tracking-wide">NOTICE</span>
            </div>
          </div>

          <!-- Icon Container -->
          <div class="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 flex items-center justify-center relative">
            <!-- Animated Ring -->
            <div class="absolute inset-0 rounded-2xl border border-cyan-400/30 animate-pulse-slow"></div>
            <!-- Main Icon -->
            <svg class="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>

          <!-- Content -->
          <div class="text-center mb-8">
            <h3 class="text-2xl font-light text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Feature Update
            </h3>
            <div class="space-y-4">
              <p class="text-gray-300 leading-relaxed text-sm">
                The contact form is currently undergoing enhancements to provide you with a better experience.
              </p>
              <p class="text-cyan-300/80 text-xs leading-relaxed">
                For immediate assistance, please use the direct contact methods provided in the contact section.
              </p>
            </div>
          </div>

          <!-- Quick Contact Options -->
          <div class="flex gap-3 mb-6 justify-center">
            <a href="mailto:elsaimeri478@gmail.com" 
               class="flex-1 p-3 rounded-xl bg-gray-800/40 border border-cyan-500/10 hover:border-cyan-400/30 transition-all duration-300 group text-center">
              <div class="flex items-center justify-center gap-2">
                <svg class="w-3 h-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span class="text-cyan-400 text-xs font-medium">Email</span>
              </div>
            </a>
            <a href="https://linkedin.com/in/elsa-imeri-953b7b323" target="_blank"
               class="flex-1 p-3 rounded-xl bg-gray-800/40 border border-blue-500/10 hover:border-blue-400/30 transition-all duration-300 group text-center">
              <div class="flex items-center justify-center gap-2">
                <svg class="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span class="text-blue-400 text-xs font-medium">LinkedIn</span>
              </div>
            </a>
          </div>

          <!-- Action Button -->
          <button 
            @click="showDialog = false"
            class="w-full group relative bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white py-3 rounded-xl font-medium transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20 overflow-hidden"
          >
            <!-- Shine Effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            
            <span class="relative z-10 flex items-center justify-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              Understand
            </span>
          </button>

          <!-- Decorative Lines -->
          <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
          <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        </div>

        <div class="absolute -top-2 -right-2 w-3 h-3 bg-cyan-400 rounded-full blur-sm opacity-60 animate-float"></div>
        <div class="absolute -bottom-2 -left-2 w-2 h-2 bg-blue-400 rounded-full blur-sm opacity-60 animate-float" style="animation-delay: 1s;"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)
const showDialog = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  isSubmitting.value = false
  
  showDialog.value = true
  
  form.value = { name: '', email: '', subject: '', message: '' }
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

@keyframes fade-in {
  from { 
    opacity: 0; 
    backdrop-filter: blur(0px);
  }
  to { 
    opacity: 1; 
    backdrop-filter: blur(8px);
  }
}

@keyframes scale-in {
  from { 
    opacity: 0; 
    transform: scale(0.9) translateY(10px);
  }
  to { 
    opacity: 1; 
    transform: scale(1) translateY(0);
  }
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-5px) scale(1.1);
  }
}

.animate-fade-in {
  animation: fade-in 0.4s ease-out;
}

.animate-scale-in {
  animation: scale-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>