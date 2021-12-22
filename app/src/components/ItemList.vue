<script>
import { onMounted, ref } from 'vue'
import axios from 'axios'

export default {
  setup() {
    const weapons = ref([])
    const bows = ref([])
    const shields = ref([])
    const armors = ref([])
    const keys = ref([])
    const runes = ref([])
    const materials = ref([])
    const enemies = ref([])
    const objectives = ref([])
    const lang = ref('')
    
    const showWeapons = ref(false)
    const showOneHanded = ref(false)
    const showTwoHanded = ref(false)
    const showSpear = ref(false)
    const showBows = ref(false)
    const showShields = ref(false)
    const showArmors = ref(false)
    const showHeads = ref(false)
    const showBodies = ref(false)
    const showLegs = ref(false)
    const showKeys = ref(false)
    const showSaddles = ref(false)
    const showRunes = ref(false)
    const showMaterials = ref(false)
    const showEnemies = ref(false)
    const showFood = ref(false)
    const showCookedFood = ref(false)

    onMounted(() => {
      axios.get('api/api.json')
      .then(res => {
        console.log(res.data)
        weapons.value = res.data.weapons
        bows.value = res.data.bows
        shields.value = res.data.shields
        armors.value = res.data.armors
        keys.value = res.data.key_items
        runes.value = res.data.runes
        materials.value = res.data.materials
        enemies.value = res.data.enemies
        lang.value = 'en'
      })
      .catch(err => console.log(err))
    })

    const toggleShow = (div) => {
      if (div == "weapons") { 
          showWeapons.value = !showWeapons.value
      } else if (div == "one-handed") {
          showOneHanded.value = !showOneHanded.value
        } else if (div == "two-handed") {
          showTwoHanded.value = !showTwoHanded.value
        } else if (div == "spear") {
          showSpear.value = !showSpear.value
        } else if (div == "bows") {
          showBows.value = !showBows.value
        } else if (div == "shields") {
          showShields.value = !showShields.value
        } else if (div == "armors") {
          showArmors.value = !showArmors.value
        } else if (div == "heads") {
          showHeads.value = !showHeads.value
        } else if (div == "bodies") {
          showBodies.value = !showBodies.value
        } else if (div == "legs") {
          showLegs.value = !showLegs.value
        } else if (div == "key-items") {
          showKeys.value = !showKeys.value
        } else if (div == "saddles") {
          showSaddles.value = !showSaddles.value
        } else if (div == "runes") {
          showRunes.value = !showRunes.value
        } else if (div == "materials") {
          showMaterials.value = !showMaterials.value
        } else if (div == "enemies") {
          showEnemies.value = !showEnemies.value
        } else if (div == 'food') {
          showFood.value = !showFood.value
        } else if (div == "coed-food") {
          showCookedFood.value = !showCookedFood.value
        }
        
    }

    const addToObjectives = (objetive) => {
        objectives.value.push(objetive)
    }

    const removeFromObjectives = (id) => {
      objectives.value.splice(id, 1)
    }

    const completeObjectives = (e) => {
      console.log(e)
      if(e.srcElement.parentElement.classList.contains('grayscale')) {
        e.srcElement.parentElement.classList.remove('grayscale')
      } else {
        e.srcElement.parentElement.classList.add('grayscale')
      }
    }


    return { completeObjectives, addToObjectives, removeFromObjectives, weapons, lang, showWeapons, showOneHanded, showTwoHanded, showSpear, toggleShow, bows, showBows, shields, showShields, armors, showArmors, showHeads, showBodies, showLegs, keys, showKeys, showSaddles, runes, showRunes, objectives, materials, showMaterials, enemies, showEnemies, showFood, showCookedFood}
  }
}

</script>

<template>
<div class="flex">
  <div class="min-h-screen max-h-screen overflow-auto w-1/2 border-solid border-gray-600 bg-gray-800 border-r">
         <h1 class="bg-gray-600 text-left text-m font-bold text-white px-5 py-2" @click="toggleShow('weapons')">Objectives</h1>
         <div class="flex flex-row flex-wrap bg-gray-800 w-full text-white py-5">
             <div class="flex justify-center items-center" v-for="(objective, id) in objectives">
                 <div class="flex flex-col items-center w-56" @dblclick="removeFromObjectives(id) ">
                     <div class="border p-3 rounded w-20 h-20 bg-emerald-700 grayscale">
                        <div class="w-full h-full" @click="completeObjectives($event)" :style="{
                            backgroundImage: 'url(' + objective.image.replace('\'', '') +')',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            backgroundPosition: 'center'
                          }">
                        </div>
                     </div>
                     <p class="py-2" v-if="objective.names[lang]">{{ objective.names[lang].replace(/_/g, ' ') }}</p>
                 </div>
             </div>
         </div>
     </div>
 <div class="w-1/2 max-h-screen overflow-auto">
   <h1 class="bg-gray-600 text-left text-m font-bold text-white px-5 py-2 border-solid border-b border-gray-800" @click="toggleShow('weapons')">> Weapons</h1>
   <div v-if="showWeapons">
     <h1 class="bg-gray-800 text-left text-m font-bold text-white px-10 py-2 border-solid border-b border-gray-600" @click="toggleShow('one-handed')">> One handed</h1>
     <div class="flex flex-row flex-wrap bg-gray-800 w-full text-white py-5" v-if="showOneHanded">
       <div class="flex justify-center items-center" v-for="(weapon, name) in weapons">
         <div class="flex flex-col items-center w-60" v-if="weapon.category == 'one-handed'" @click="addToObjectives(weapon)">
             <div class="border p-3 bg-gray-600 rounded w-20 h-20">
               <div class="w-full h-full" :style="{
                        backgroundImage: 'url(' + weapon.image.replace('\'', '') +')',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center'
                       }">
               </div>
             </div>
             <p class="py-2" v-if="weapon.names[lang]">{{ weapon.names[lang].replace(/_/g, ' ') }}</p>
         </div>
       </div>
     </div>
     <h1 class="bg-gray-800 text-left text-m font-bold text-white px-10 py-2 border-solid border-b border-gray-600" @click="toggleShow('two-handed')">> Two handed</h1>
     <div class="flex flex-row flex-wrap bg-gray-800 w-full text-white py-5" v-if="showTwoHanded">
       <div class="flex justify-center items-center" v-for="(weapon, name) in weapons">
         <div class="flex flex-col items-center w-60" v-if="weapon.category == 'two-handed'" @click="addToObjectives(weapon)">
             <div class="border p-3 bg-gray-600 rounded w-20 h-20">
                <div class="w-full h-full" :style="{
                  backgroundImage: 'url(' + weapon.image.replace('\'', '') +')',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center'
                  }">
               </div>
             </div>
             <p class="py-2" v-if="weapon.names[lang]">{{ weapon.names[lang].replace(/_/g, ' ') }}</p>
         </div>
       </div>
     </div>
     <h1 class="bg-gray-800 text-left text-m font-bold text-white px-10 py-2 border-solid border-b border-gray-600" @click="toggleShow('spear')">> Spear</h1>
     <div class="flex flex-row flex-wrap bg-gray-800 w-full text-white py-5" v-if="showSpear">
       <div class="flex justify-center items-center" v-for="(weapon, name) in weapons">
         <div class="flex flex-col items-center w-60" v-if="weapon.category == 'spear'" @click="addToObjectives(weapon)">
             <div class="border p-3 bg-gray-600 rounded w-20 h-20">
                  <div class="w-full h-full" :style="{
                    backgroundImage: 'url(' + weapon.image.replace('\'', '') +')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                    }">
                  </div>
               </div>
             <p class="py-2" v-if="weapon.names[lang]">{{ weapon.names[lang].replace(/_/g, ' ') }}</p>
         </div>
       </div>
     </div>
   </div>
   <h1 class="bg-gray-600 text-left text-m font-bold text-white px-5 py-2 border-solid border-b border-gray-800" @click="toggleShow('bows')">> Bows</h1>
   <div v-if="showBows">
     <div class="flex flex-row flex-wrap bg-gray-800 w-full text-white py-5" v-if="showBows">
       <div class="flex justify-center items-center" v-for="(bow, name) in bows">
         <div class="flex flex-col items-center w-60" @click="addToObjectives(bow)">
                <div class="border p-3 bg-gray-600 rounded w-20 h-20">
                  <div class="w-full h-full" :style="{
                    backgroundImage: 'url(' + bow.image.replace('\'', '') +')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                    }">
                  </div>
               </div>
             <p class="py-2" v-if="bow.names[lang]">{{ bow.names[lang].replace(/_/g, ' ') }}</p>
         </div>
       </div>
     </div>
   </div>
   <h1 class="bg-gray-600 text-left text-m font-bold text-white px-5 py-2 border-solid border-b border-gray-800" @click="toggleShow('shields')">> Shields</h1>
   <div v-if="showShields">
     <div class="flex flex-row flex-wrap bg-gray-800 w-full text-white py-5" v-if="showShields">
       <div class="flex justify-center items-center" v-for="(shield, name) in shields">
         <div class="flex flex-col items-center w-60" @click="addToObjectives(shield)">
                <div class="border p-3 bg-gray-600 rounded w-20 h-20">
                  <div class="w-full h-full" :style="{
                    backgroundImage: 'url(' + shield.image.replace('\'', '') +')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                    }">
                  </div>
               </div>
             <p class="py-2" v-if="shield.names[lang]">{{ shield.names[lang].replace(/_/g, ' ') }}</p>
         </div>
       </div>
     </div>
   </div>
   <h1 class="bg-gray-600 text-left text-m font-bold text-white px-5 py-2 border-solid border-b border-gray-800" @click="toggleShow('armors')">> Armors</h1>
   <div v-if="showArmors">
     <h1 class="bg-gray-800 text-left text-m font-bold text-white px-10 py-2 border-solid border-b border-gray-600" @click="toggleShow('heads')">> Head</h1>
     <div class="flex flex-row flex-wrap bg-gray-800 w-full text-white py-5" v-if="showHeads">
       <div class="flex justify-center items-center" v-for="(armor, name) in armors">
         <div class="flex flex-col items-center w-60" v-if="armor.category == 'head'" @click="addToObjectives(armor)">
             <div class="border p-3 bg-gray-600 rounded w-20 h-20">
                  <div class="w-full h-full" :style="{
                    backgroundImage: 'url(' + armor.image.replace('\'', '') +')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                    }">
                  </div>
               </div>
             <p class="py-2" v-if="armor.names[lang]">{{ armor.names[lang].replace(/_/g, ' ') }}</p>
         </div>
       </div>
     </div>
     <h1 class="bg-gray-800 text-left text-m font-bold text-white px-10 py-2 border-solid border-b border-gray-600" @click="toggleShow('bodies')">> Body</h1>
     <div class="flex flex-row flex-wrap bg-gray-800 w-full text-white py-5" v-if="showBodies">
       <div class="flex justify-center items-center" v-for="(armor, name) in armors">
         <div class="flex flex-col items-center w-60" v-if="armor.category == 'body'" @click="addToObjectives(armor)">
             <div class="border p-3 bg-gray-600 rounded w-20 h-20">
                  <div class="w-full h-full" :style="{
                    backgroundImage: 'url(' + armor.image.replace('\'', '') +')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                    }">
                  </div>
               </div>
             <p class="py-2" v-if="armor.names[lang]">{{ armor.names[lang].replace(/_/g, ' ') }}</p>
         </div>
       </div>
     </div>
     <h1 class="bg-gray-800 text-left text-m font-bold text-white px-10 py-2 border-solid border-b border-gray-600" @click="toggleShow('legs')">> Legs</h1>
     <div class="flex flex-row flex-wrap bg-gray-800 w-full text-white py-5" v-if="showLegs">
       <div class="flex justify-center items-center" v-for="(armor, name) in armors">
         <div class="flex flex-col items-center w-60" v-if="armor.category == 'leg'" @click="addToObjectives(armor)">
             <div class="border p-3 bg-gray-600 rounded w-20 h-20">
                  <div class="w-full h-full" :style="{
                    backgroundImage: 'url(' + armor.image.replace('\'', '') +')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                    }">
                  </div>
               </div>
             <p class="py-2" v-if="armor.names[lang]">{{ armor.names[lang].replace(/_/g, ' ') }}</p>
         </div>
       </div>
     </div>
   </div>
   <h1 class="bg-gray-600 text-left text-m font-bold text-white px-5 py-2 border-solid border-b border-gray-800" @click="toggleShow('key-items')">> Key Items</h1>
   <div v-if="showKeys">
     <div class="flex flex-row flex-wrap bg-gray-800 w-full text-white py-5">
       <div class="flex justify-center items-center" v-for="(key, name) in keys">
         <div class="flex flex-col items-center w-60" v-if="key.category == 'key'" @click="addToObjectives(key)">
             <div class="border p-3 bg-gray-600 rounded w-20 h-20">
                  <div class="w-full h-full" :style="{
                    backgroundImage: 'url(' + key.image.replace('\'', '') +')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                    }">
                  </div>
               </div>
             <p class="py-2" v-if="key.names[lang]">{{ key.names[lang].replace(/_/g, ' ') }}</p>
         </div>
       </div>
     </div>
     <h1 class="bg-gray-800 text-left text-m font-bold text-white px-10 py-2 border-solid border-b border-gray-600" @click="toggleShow('saddles')">> Saddles</h1>
     <div class="flex flex-row flex-wrap bg-gray-800 w-full text-white py-5" v-if="showSaddles">
       <div class="flex justify-center items-center" v-for="(key, name) in keys">
         <div class="flex flex-col items-center w-60" v-if="key.category == 'saddles'" @click="addToObjectives(key)">
             <div class="border p-3 bg-gray-600 rounded w-20 h-20">
                  <div class="w-full h-full" :style="{
                    backgroundImage: 'url(' + key.image.replace('\'', '') +')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                    }">
                  </div>
               </div>
             <p class="py-2" v-if="key.names[lang]">{{ key.names[lang].replace(/_/g, ' ') }}</p>
         </div>
       </div>
     </div>
   </div>
   <h1 class="bg-gray-600 text-left text-m font-bold text-white px-5 py-2 border-solid border-b border-gray-800" @click="toggleShow('runes')">> Runes</h1>
   <div v-if="showRunes">
     <div class="flex flex-row flex-wrap bg-gray-800 w-full text-white py-5" v-if="showRunes">
       <div class="flex justify-center items-center" v-for="(rune, name) in runes">
         <div class="flex flex-col items-center w-60" @click="addToObjectives(rune)">
             <div class="border p-3 bg-gray-600 rounded w-20 h-20">
                  <div class="w-full h-full" :style="{
                    backgroundImage: 'url(' + rune.image.replace('\'', '') +')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                    }">
                  </div>
               </div>
             <p class="py-2" v-if="rune.names[lang]">{{ rune.names[lang].replace(/_/g, ' ') }}</p>
         </div>
       </div>
     </div>
   </div>
   <!-- Materials / Food here -->
   <h1 class="bg-gray-600 text-left text-m font-bold text-white px-5 py-2 border-solid border-b border-gray-800" @click="toggleShow('materials')">> Materials</h1>
   <div v-if="showMaterials">
     <div class="flex flex-row flex-wrap bg-gray-800 w-full text-white py-5">
       <div class="flex justify-center items-center" v-for="(material, name) in materials">
         <div class="flex flex-col items-center w-60" v-if="material.category == 'material'" @click="addToObjectives(material)">
             <div class="border p-3 bg-gray-600 rounded w-20 h-20">
                  <div class="w-full h-full" :style="{
                    backgroundImage: 'url(' + material.image.replace('\'', '') +')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                    }">
                  </div>
               </div>
             <p class="py-2" v-if="material.names[lang]">{{ material.names[lang].replace(/_/g, ' ') }}</p>
         </div>
       </div>
     </div>
     <h1 class="bg-gray-800 text-left text-m font-bold text-white px-10 py-2 border-solid border-b border-gray-600" @click="toggleShow('food')">> Food</h1>
     <div class="flex flex-row flex-wrap bg-gray-800 w-full text-white py-5" v-if="showFood">
       <div class="flex justify-center items-center" v-for="(material, name) in materials">
         <div class="flex flex-col items-center w-60" v-if="material.category == 'food'" @click="addToObjectives(material)">
             <div class="border p-3 bg-gray-600 rounded w-20 h-20">
                  <div class="w-full h-full" :style="{
                    backgroundImage: 'url(' + material.image.replace('\'', '') +')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                    }">
                  </div>
               </div>
             <p class="py-2" v-if="material.names[lang]">{{ material.names[lang].replace(/_/g, ' ') }}</p>
         </div>
       </div>
     </div>
     <h1 class="bg-gray-800 text-left text-m font-bold text-white px-10 py-2 border-solid border-b border-gray-600" @click="toggleShow('cooked-food')">> Cooked Food</h1>
     <div class="flex flex-row flex-wrap bg-gray-800 w-full text-white py-5" v-if="showCookedFood">
       <div class="flex justify-center items-center" v-for="(material, name) in materials">
         <div class="flex flex-col items-center w-60" v-if="material.category == 'cooked-food'" @click="addToObjectives(material)">
             <div class="border p-3 bg-gray-600 rounded w-20 h-20">
                  <div class="w-full h-full" :style="{
                    backgroundImage: 'url(' + material.image.replace('\'', '') +')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                    }">
                  </div>
               </div>
             <p class="py-2" v-if="material.names[lang]">{{ material.names[lang].replace(/_/g, ' ') }}</p>
         </div>
       </div>
     </div>
   </div>

  <h1 class="bg-gray-600 text-left text-m font-bold text-white px-5 py-2 border-solid border-b border-gray-800" @click="toggleShow('enemies')">> Enemies</h1>
   <div v-if="showEnemies">
     <div class="flex flex-row flex-wrap bg-gray-800 w-full text-white py-5" v-if="showEnemies">
       <div class="flex justify-center items-center" v-for="(enemy, name) in enemies">
         <div class="flex flex-col items-center w-60" @click="addToObjectives(enemy)">
             <div class="border p-3 bg-gray-600 rounded w-20 h-20">
                  <div class="w-full h-full" :style="{
                    backgroundImage: 'url(' + enemy.image.replace('\'', '') +')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                    }">
                  </div>
               </div>
             <p class="py-2" v-if="enemy.names[lang]">{{ enemy.names[lang].replace(/_/g, ' ') }}</p>
         </div>
       </div>
     </div>
   </div>
 </div>
</div>
<p class="text-xs bottom-0 right-6 fixed">v.Beta-0.1.5</p>
<p class="text-xs bottom-4 left-2 fixed text-white">Click on the objective to complete it</p>
<p class="text-xs bottom-0 left-2 fixed text-white">Double click to remove it</p>
</template>


<style scoped>

</style>
