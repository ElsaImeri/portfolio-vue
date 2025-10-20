<template>
  <section id="skills" class="py-24 bg-black relative overflow-hidden">
    
    <div class="absolute inset-0 opacity-10">
      <svg class="w-full h-full" viewBox="0 0 100 100">
        <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="currentColor" stroke-width="0.2" class="text-cyan-500"/>
        <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="currentColor" stroke-width="0.1" class="text-blue-500"/>
        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" stroke-width="0.15" class="text-purple-500"/>
        
        <path v-for="line in circuitLines" :key="line.id" 
              :d="line.path" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="0.1" 
              class="text-green-500 circuit-line"
              :style="{'stroke-dasharray': line.length, 'stroke-dashoffset': line.offset}"/>
      </svg>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      
      <div class="text-center mb-20">
        <div class="inline-block mb-6">
          <div class="flex space-x-1 mb-4">
            <div class="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
            <div class="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style="animation-delay: 0.2s"></div>
            <div class="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style="animation-delay: 0.4s"></div>
          </div>
        </div>
        <h2 class="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
          TECH
          <span class="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent block">
            SKILLS
          </span>
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto font-light">
          Technologies and tools I'm actively learning and building with
        </p>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-3 gap-8 max-w-8xl mx-auto">
        
        <div class="group relative" @mouseenter="activeArchitecture = 'frontend'">
          <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/5 rounded-3xl border border-cyan-500/20 transform group-hover:scale-105 transition-all duration-700"></div>
          <div class="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 h-full">
            
            <div class="flex items-start justify-between mb-8">
              <div>
                <div class="flex items-center space-x-3 mb-2">
                  <div class="w-3 h-3 bg-cyan-500 rounded-full"></div>
                  <h3 class="text-2xl font-bold text-white">FRONTEND</h3>
                </div>
                <p class="text-cyan-400 text-sm font-mono">CLIENT-SIDE DEVELOPMENT</p>
              </div>
              <div class="text-right">
                <div class="text-cyan-400 text-2xl font-black">{{ frontendSkills.length }}</div>
                <div class="text-gray-500 text-xs">TECHNOLOGIES</div>
              </div>
            </div>

            <div class="space-y-4">
              <div 
                v-for="(skill, index) in frontendSkills" 
                :key="skill.name"
                class="relative"
              >
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-cyan-500/10 rounded-lg flex items-center justify-center border border-cyan-500/20">
                      <img :src="skill.icon" :alt="skill.name" class="w-4 h-4" />
                    </div>
                    <div>
                      <span class="text-gray-300 font-medium text-sm block">{{ skill.name }}</span>
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="text-cyan-400 text-sm font-bold">{{ skill.confidence }}%</div>
                  </div>
                </div>
                
                <div class="relative">
                  <div class="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      class="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1500 ease-out"
                      :style="{ width: skill.confidence + '%' }"
                    ></div>
                  </div>
                  <div class="absolute -top-1 left-0 w-2 h-3 bg-cyan-400 rounded-full transform -translate-y-1/2"
                       :style="{ left: skill.confidence + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="group relative" @mouseenter="activeArchitecture = 'backend'">
          <div class="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/5 rounded-3xl border border-green-500/20 transform group-hover:scale-105 transition-all duration-700"></div>
          <div class="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 h-full">
            
            <div class="flex items-start justify-between mb-8">
              <div>
                <div class="flex items-center space-x-3 mb-2">
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  <h3 class="text-2xl font-bold text-white">BACKEND & DB</h3>
                </div>
                <p class="text-green-400 text-sm font-mono">SERVER-SIDE & DATABASES</p>
              </div>
              <div class="text-right">
                <div class="text-green-400 text-2xl font-black">{{ backendSkills.length }}</div>
                <div class="text-gray-500 text-xs">TECHNOLOGIES</div>
              </div>
            </div>

            <div class="space-y-4">
              <div 
                v-for="skill in backendSkills" 
                :key="skill.name"
                class="relative"
              >
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center border border-green-500/20">
                      <img :src="skill.icon" :alt="skill.name" class="w-4 h-4" />
                    </div>
                    <div>
                      <span class="text-gray-300 font-medium text-sm block">{{ skill.name }}</span>
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="text-green-400 text-sm font-bold">{{ skill.confidence }}%</div>
                  </div>
                </div>
                
                <div class="relative">
                  <div class="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      class="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-1500 ease-out"
                      :style="{ width: skill.confidence + '%' }"
                    ></div>
                  </div>
                  <div class="absolute -top-1 left-0 w-2 h-3 bg-green-400 rounded-full transform -translate-y-1/2"
                       :style="{ left: skill.confidence + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="group relative" @mouseenter="activeArchitecture = 'tools'">
          <div class="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/5 rounded-3xl border border-purple-500/20 transform group-hover:scale-105 transition-all duration-700"></div>
          <div class="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 h-full">
            
            <div class="flex items-start justify-between mb-8">
              <div>
                <div class="flex items-center space-x-3 mb-2">
                  <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <h3 class="text-2xl font-bold text-white">TOOLS & OTHER</h3>
                </div>
                <p class="text-purple-400 text-sm font-mono">DEVELOPMENT TOOLS & APIS</p>
              </div>
              <div class="text-right">
                <div class="text-purple-400 text-2xl font-black">{{ toolsSkills.length }}</div>
                <div class="text-gray-500 text-xs">TECHNOLOGIES</div>
              </div>
            </div>

            <div class="space-y-4">
              <div 
                v-for="skill in toolsSkills" 
                :key="skill.name"
                class="relative"
              >
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center border border-purple-500/20">
                      <img :src="skill.icon" :alt="skill.name" class="w-4 h-4" />
                    </div>
                    <div>
                      <span class="text-gray-300 font-medium text-sm block">{{ skill.name }}</span>
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="text-purple-400 text-sm font-bold">{{ skill.confidence }}%</div>
                  </div>
                </div>
                
                <div class="relative">
                  <div class="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      class="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1500 ease-out"
                      :style="{ width: skill.confidence + '%' }"
                    ></div>
                  </div>
                  <div class="absolute -top-1 left-0 w-2 h-3 bg-purple-400 rounded-full transform -translate-y-1/2"
                       :style="{ left: skill.confidence + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="mt-16 p-10 rounded-3xl border border-gray-700/30 bg-gradient-to-br from-gray-800/10 to-gray-900/10 backdrop-blur-sm">
        <div class="text-center mb-12">
          <h3 class="text-3xl font-light text-white mb-4">Learning Journey</h3>
          <p class="text-gray-400 max-w-2xl mx-auto">My current focus and progress in different technology areas</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="progress in skillProgress" 
            :key="progress.category"
            class="text-center group cursor-pointer"
          >
            <div class="relative inline-block mb-4">
              <svg class="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="currentColor" stroke-width="8" fill="none" class="text-gray-700/50"/>
                <circle 
                  cx="50" cy="50" r="40" 
                  stroke="currentColor" 
                  stroke-width="8" 
                  fill="none" 
                  :class="progress.color"
                  stroke-dasharray="251.2"
                  :stroke-dashoffset="251.2 - (251.2 * progress.percentage) / 100"
                  class="transition-all duration-1000 ease-out"
                />
              </svg>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-white font-bold text-lg">{{ progress.percentage }}%</span>
              </div>
            </div>
            <div class="text-white font-medium mb-1">{{ progress.category }}</div>
            <div class="text-gray-400 text-sm">{{ progress.description }}</div>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <div class="inline-block bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
          <h3 class="text-2xl font-bold text-white mb-4">Currently Focusing On</h3>
          <p class="text-gray-400 mb-6">Technologies I'm actively working with in current projects</p>
          <div class="flex flex-wrap justify-center gap-4">
            <div v-for="tech in currentlyFocusing" :key="tech.name" 
                 class="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 flex items-center space-x-2">
              <img :src="tech.icon" :alt="tech.name" class="w-4 h-4" />
              <span class="text-cyan-300 font-medium">{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-16">
        <div class="inline-flex items-center space-x-8 text-gray-500 text-sm font-mono">
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
            <span>FRONTEND DEVELOPMENT</span>
          </div>
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>BACKEND & DATABASES</span>
          </div>
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>TOOLS & METHODOLOGIES</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const activeArchitecture = ref('frontend')

const frontendSkills = ref([
  { 
    name: 'Vue.js', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
    confidence: 85 
  },
  { 
    name: 'React', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    confidence: 80 
  },
  { 
    name: 'JavaScript', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    confidence: 85 
  },
  { 
    name: 'TypeScript', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    confidence: 70 
  },
  { 
    name: 'HTML5', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    confidence: 95
  },
  { 
    name: 'CSS3', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    confidence: 90 
  },
  { 
    name: 'Tailwind CSS', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    confidence: 90 
  }
])

const backendSkills = ref([
  { 
    name: 'Laravel', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
    confidence: 80 
  },
  { 
    name: 'PHP', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
    confidence: 75 
  },
  { 
    name: 'Node.js', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    confidence: 80 
  },
  { 
    name: 'Express.js', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
    confidence: 75 
  },
  { 
    name: 'Java', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    confidence: 70 
  },
  { 
    name: 'C#', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
    confidence: 65 
  },
  { 
    name: 'MySQL', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    confidence: 90 
  },
  { 
    name: 'SQL Server', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
    confidence: 75 
  }
])

const toolsSkills = ref([
  { 
    name: 'Git', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    confidence: 85 
  },
  { 
    name: 'RESTful APIs', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    confidence: 88 
  },
  { 
    name: 'Responsive Design', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    confidence: 90 
  }
])

const skillProgress = ref([
  { category: 'Frontend', percentage: 85, color: 'text-cyan-400', description: 'Modern frameworks' },
  { category: 'Backend', percentage: 80, color: 'text-green-400', description: 'Server-side & DB' },
  { category: 'Tools', percentage: 88, color: 'text-purple-400', description: 'Development workflow' },
  { category: 'Overall', percentage: 84, color: 'text-blue-400', description: 'Technical proficiency' }
])

const currentlyFocusing = ref([
  { 
    name: 'Vue.js', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg'
  },
  { 
    name: 'React', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
  },
  { 
    name: 'Laravel', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg'
  },
  { 
    name: 'MySQL', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'
  },
  { 
    name: 'SQL Server', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg'
  }
])

const circuitLines = ref([
  { id: 1, path: "M10,30 L40,30 L40,60 L70,60", length: "100", offset: "100" },
  { id: 2, path: "M90,70 L60,70 L60,40 L30,40", length: "100", offset: "100" },
  { id: 3, path: "M25,10 L25,40 L55,40 L55,70", length: "100", offset: "100" }
])

onMounted(() => {
  setTimeout(() => {
    circuitLines.value.forEach(line => {
      line.offset = "0"
    })
  }, 500)
})
</script>

<style scoped>
.circuit-line {
  transition: stroke-dashoffset 1s ease-in-out;
}

img {
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.w-8.h-8 img {
  filter: brightness(0) invert(0.8);
}
</style>