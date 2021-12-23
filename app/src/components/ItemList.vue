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
    const foods = ref([])
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
    const showMaterialFood = ref(false)
    const showCookedFood = ref(false)
    const showFood = ref(false)
    const showRoasted = ref(false)
    const showFrozen = ref(false)
    const showElixir = ref(false)

    const showOptions = ref(false)
    const showNames = ref(true)

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
        foods.value = res.data.food
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
        } else if (div == 'material-food') {
          showMaterialFood.value = !showMaterialFood.value
        } else if (div == "cooked-food") {
          showCookedFood.value = !showCookedFood.value
        } else if (div == 'food') {
          showFood.value = !showFood.value
        } else if (div == 'roasted') {
          showRoasted.value = !showRoasted.value
        } else if (div == 'frozen') {
          showFrozen.value = !showFrozen.value
        } else if (div == 'elixir') {
          showElixir.value = !showElixir.value
        } else if (div == 'options') {
          showOptions.value = !showOptions.value
        } else if (div == 'names') {
          showNames.value = !showNames.value
        }
        
    }

    const addToObjectives = (objective) => {
        console.log(objective)
        let temp_counter;
        if (document.getElementById(objective.names.en)) {
          if (document.getElementById(objective.names.en).value == '') {
            temp_counter = 1 
          } else {
            temp_counter = document.getElementById(objective.names.en).value
          }
          objective.counter = temp_counter
        }
        objectives.value.push(objective)

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


    return { completeObjectives, showNames, showOptions, addToObjectives, removeFromObjectives, weapons, lang, showWeapons, showOneHanded, showTwoHanded, showSpear, toggleShow, bows, showBows, shields, showShields, armors, showArmors, showHeads, showBodies, showLegs, keys, showKeys, showSaddles, runes, showRunes, objectives, materials, showMaterials, enemies, showEnemies, showMaterialFood, showCookedFood, showFood, foods, showRoasted, showFrozen, showElixir}
  }
}

</script>

<template>
<div class="flex flex-col lg:flex-row">
  <div class="lg:min-h-screen lg:max-h-screen min-h-[50vh] justify-center overflow-auto lg:w-9/12 w-full border-solid border-neutral-900 border-r">
    <div class="backdrop-blur text-left flex justify-between items-center text-m font-bold text-white px-5 py-2">
      <h1>Objectives</h1>
      <span @click="toggleShow('options')" class="icon-equalizer2 cursor-pointer"></span>
    </div>
        <div class="flex flex-row flex-wrap w-full text-white p-5 backdrop-blur-md"  v-if="showOptions">
            <div class="backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer" @click="toggleShow('names')">
                <span class="icon-eye px-5" :class="{ 'icon-eye-blocked' : !showNames }"></span>
                <h1>Names</h1>
            </div>
          </div>       
         <div class="flex flex-row flex-wrap w-full text-white py-5">
             <div class="flex justify-center items-center" v-for="(objective, id) in objectives">
                 <div class="flex flex-col items-center w-44 lg:w-56 py-3" @dblclick="removeFromObjectives(id) ">
                     <div class="relative border p-3 rounded lg:w-20 lg:h-20 w-14 h-14 bg-emerald-700 grayscale">
                        <div class="w-full h-full" @click="completeObjectives($event)" :style="{
                        backgroundImage: 'url(' + objective.image.replace('\'', '') +')',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center'
                       }">
                        </div>
                     <p v-if="objective.counter" style="right: -15px; top:-10px" class="absolute backdrop-blur-md bg-neutral-900 border h-7 px-2 flex items-center justify-center rounded-full">{{ objective.counter }}</p>
                     </div>
                     <p class="py-2" v-if="showNames && objective.names[lang]">{{ objective.names[lang].replace(/_/g, ' ') }}</p>
                 </div>
             </div>
         </div>
      </div>
 <div class="lg:w-3/12 w-full max-h-screen overflow-auto text-center">
   <div class="backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer" @click="toggleShow('weapons')">
      <span class="icon-menu3 px-5" :class="{ 'icon-menu4' : showWeapons }"></span>
     <h1>Weapons</h1>
   </div>
   <div v-if="showWeapons">
   <div class="backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer" @click="toggleShow('one-handed')">
      <span class="icon-menu3 pr-5 pl-10" :class="{ 'icon-menu4' : showOneHanded }"></span>
     <h1>One Handed</h1>
   </div>
     <div class="flex flex-row flex-wrap w-full text-white py-5 justify-center" v-if="showOneHanded">
       <div class="flex justify-center items-center" v-for="(weapon, name) in weapons">
         <div class="flex flex-col items-center w-40 py-2" v-if="weapon.category == 'one-handed'" @click="addToObjectives(weapon)">
             <div class="border p-3 backdrop-blur rounded w-14 h-14">
               <div class="w-full h-full" :style="{
                        backgroundImage: 'url(' + weapon.image.replace('\'', '') +')',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center'
                       }">
               </div>
             </div>
             <p class="pt-2" v-if="showNames && weapon.names[lang]">{{ weapon.names[lang].replace(/_/g, ' ') }}</p>
         </div>
       </div>
     </div>
   <div class="backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer" @click="toggleShow('two-handed')">
      <span class="icon-menu3 pr-5 pl-10" :class="{ 'icon-menu4' : showTwoHanded }"></span>
     <h1>Two Handed</h1>
   </div>
     <div class="flex flex-row flex-wrap w-full text-white py-5 justify-center" v-if="showTwoHanded">
       <div class="flex justify-center items-center" v-for="(weapon, name) in weapons">
         <div class="flex flex-col items-center w-40 py-2" v-if="weapon.category == 'two-handed'" @click="addToObjectives(weapon)">
             <div class="border p-3 backdrop-blur rounded w-14 h-14">
                <div class="w-full h-full" :style="{
                  backgroundImage: 'url(' + weapon.image.replace('\'', '') +')',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center'
                  }">
               </div>
             </div>
             <p class="pt-2" v-if="showNames && weapon.names[lang]">{{ weapon.names[lang].replace(/_/g, ' ') }}</p>
         </div>
       </div>
     </div>
   <div class="backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer" @click="toggleShow('spear')">
      <span class="icon-menu3 pr-5 pl-10" :class="{ 'icon-menu4' : showSpear }"></span>
     <h1>Spear</h1>
   </div>
     <div class="flex flex-row flex-wrap w-full text-white py-5 justify-center" v-if="showSpear">
       <div class="flex justify-center items-center" v-for="(weapon, name) in weapons">
         <div class="flex flex-col items-center w-40 py-2" v-if="weapon.category == 'spear'" @click="addToObjectives(weapon)">
             <div class="border p-3 backdrop-blur rounded w-14 h-14">
                  <div class="w-full h-full" :style="{
                    backgroundImage: 'url(' + weapon.image.replace('\'', '') +')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                    }">
                  </div>
               </div>
             <p class="pt-2" v-if="showNames && weapon.names[lang]">{{ weapon.names[lang].replace(/_/g, ' ') }}</p>
         </div>
       </div>
     </div>
   </div>
   <div class="backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer" @click="toggleShow('bows')">
      <span class="icon-menu3 px-5" :class="{ 'icon-menu4' : showBows }"></span>
     <h1>Bows</h1>
   </div>
   <div v-if="showBows">
     <div class="flex flex-row flex-wrap w-full text-white py-5 justify-center" v-if="showBows">
       <div class="flex justify-center items-center" v-for="(bow, name) in bows">
         <div class="flex flex-col items-center w-40 py-2" @click="addToObjectives(bow)">
                <div class="border p-3 backdrop-blur rounded w-14 h-14">
                  <div class="w-full h-full" :style="{
                    backgroundImage: 'url(' + bow.image.replace('\'', '') +')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                    }">
                  </div>
               </div>
             <p class="pt-2" v-if="showNames && bow.names[lang]">{{ bow.names[lang].replace(/_/g, ' ') }}</p>
         </div>
       </div>
     </div>
   </div>
   <div class="backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer" @click="toggleShow('shields')">
      <span class="icon-menu3 px-5" :class="{ 'icon-menu4' : showShields }"></span>
     <h1>Shields</h1>
   </div>
   <div v-if="showShields">
     <div class="flex flex-row flex-wrap w-full text-white py-5 justify-center" v-if="showShields">
       <div class="flex justify-center items-center" v-for="(shield, name) in shields">
         <div class="flex flex-col items-center w-40 py-2" @click="addToObjectives(shield)">
                <div class="border p-3 backdrop-blur rounded w-14 h-14">
                  <div class="w-full h-full" :style="{
                    backgroundImage: 'url(' + shield.image.replace('\'', '') +')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                    }">
                  </div>
               </div>
             <p class="pt-2" v-if="showNames && shield.names[lang]">{{ shield.names[lang].replace(/_/g, ' ') }}</p>
         </div>
       </div>
     </div>
   </div>
   <div class="backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer" @click="toggleShow('armors')">
      <span class="icon-menu3 px-5" :class="{ 'icon-menu4' : showArmors }"></span>
     <h1>Armors</h1>
   </div>
   <div v-if="showArmors">
   <div class="backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer" @click="toggleShow('heads')">
      <span class="icon-menu3 pr-5 pl-10" :class="{ 'icon-menu4' : showHeads }"></span>
     <h1>Head</h1>
   </div>
     <div class="flex flex-row flex-wrap w-full text-white py-5 justify-center" v-if="showHeads">
       <div class="flex justify-center items-center" v-for="(armor, name) in armors">
         <div class="flex flex-col items-center w-40 py-2" v-if="armor.category == 'head'" @click="addToObjectives(armor)">
             <div class="border p-3 backdrop-blur rounded w-14 h-14">
                  <div class="w-full h-full" :style="{
                    backgroundImage: 'url(' + armor.image.replace('\'', '') +')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                    }">
                  </div>
               </div>
             <p class="pt-2" v-if="showNames && armor.names[lang]">{{ armor.names[lang].replace(/_/g, ' ') }}</p>
         </div>
       </div>
     </div>
   <div class="backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer" @click="toggleShow('bodies')">
      <span class="icon-menu3 pr-5 pl-10" :class="{ 'icon-menu4' : showBodies }"></span>
     <h1>Body</h1>
   </div>
     <div class="flex flex-row flex-wrap w-full text-white py-5 justify-center" v-if="showBodies">
       <div class="flex justify-center items-center" v-for="(armor, name) in armors">
         <div class="flex flex-col items-center w-40 py-2" v-if="armor.category == 'body'" @click="addToObjectives(armor)">
             <div class="border p-3 backdrop-blur rounded w-14 h-14">
                  <div class="w-full h-full" :style="{
                    backgroundImage: 'url(' + armor.image.replace('\'', '') +')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                    }">
                  </div>
               </div>
             <p class="pt-2" v-if="showNames && armor.names[lang]">{{ armor.names[lang].replace(/_/g, ' ') }}</p>
         </div>
       </div>
     </div>
    <div class="backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer" @click="toggleShow('legs')">
      <span class="icon-menu3 pr-5 pl-10" :class="{ 'icon-menu4' : showLegs }"></span>
      <h1>Legs</h1>
    </div>
     <div class="flex flex-row flex-wrap w-full text-white py-5 justify-center" v-if="showLegs">
       <div class="flex justify-center items-center" v-for="(armor, name) in armors">
         <div class="flex flex-col items-center w-40 py-2" v-if="armor.category == 'leg'" @click="addToObjectives(armor)">
             <div class="border p-3 backdrop-blur rounded w-14 h-14">
                  <div class="w-full h-full" :style="{
                    backgroundImage: 'url(' + armor.image.replace('\'', '') +')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                    }">
                  </div>
               </div>
             <p class="pt-2" v-if="showNames && armor.names[lang]">{{ armor.names[lang].replace(/_/g, ' ') }}</p>
         </div>
       </div>
     </div>
   </div>
   <div class="backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer" @click="toggleShow('key-items')">
      <span class="icon-menu3 px-5" :class="{ 'icon-menu4' : showKeys }"></span>
     <h1>Key Items</h1>
   </div>
   <div v-if="showKeys">
     <div class="flex flex-row flex-wrap w-full text-white py-5 justify-center">
       <div class="flex justify-center items-center" v-for="(key, name) in keys">
         <div class="flex flex-col items-center w-40 py-2" v-if="key.category == 'key'">
             <div class="border p-3 backdrop-blur rounded w-14 h-14" @click="addToObjectives(key)">
                  <div class="w-full h-full" :style="{
                    backgroundImage: 'url(' + key.image.replace('\'', '') +')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                    }">
                  </div>
               </div>
             <p class="pt-2" v-if="showNames && key.names[lang]">{{ key.names[lang].replace(/_/g, ' ') }}</p>
              <input :id="name" v-if="name == 'Heart_Container' || name == 'Stamina_Vessel' || name == 'Korok_Seed'" placeholder="1" class="w-10 right-44 rounded bg-transparent border border-white text-sm w-[25%]" type="number">

         </div>
       </div>
     </div>
    <div class="backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer" @click="toggleShow('saddles')">
      <span class="icon-menu3 pr-5 pl-10" :class="{ 'icon-menu4' : showSaddles }"></span>
      <h1>Saddles</h1>
    </div>
     <div class="flex flex-row flex-wrap w-full text-white py-5 justify-center" v-if="showSaddles">
       <div class="flex justify-center items-center" v-for="(key, name) in keys">
         <div class="flex flex-col items-center w-40 py-2" v-if="key.category == 'saddles'" @click="addToObjectives(key)">
             <div class="border p-3 backdrop-blur rounded w-14 h-14">
                  <div class="w-full h-full" :style="{
                    backgroundImage: 'url(' + key.image.replace('\'', '') +')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                    }">
                  </div>
               </div>
             <p class="pt-2" v-if="showNames && key.names[lang]">{{ key.names[lang].replace(/_/g, ' ') }}</p>
         </div>
       </div>
     </div>
   </div>
   <div class="backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer" @click="toggleShow('runes')">
      <span class="icon-menu3 px-5" :class="{ 'icon-menu4' : showRunes }"></span>
     <h1>Runes</h1>
   </div>
   <div v-if="showRunes">
     <div class="flex flex-row flex-wrap w-full text-white py-5 justify-center" v-if="showRunes">
       <div class="flex justify-center items-center" v-for="(rune, name) in runes">
         <div class="flex flex-col items-center w-40 py-2" @click="addToObjectives(rune)">
             <div class="border p-3 backdrop-blur rounded w-14 h-14">
                  <div class="w-full h-full" :style="{
                    backgroundImage: 'url(' + rune.image.replace('\'', '') +')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                    }">
                  </div>
               </div>
             <p class="pt-2" v-if="showNames && rune.names[lang]">{{ rune.names[lang].replace(/_/g, ' ') }}</p>
         </div>
       </div>
     </div>
   </div>
   <div class="backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer" @click="toggleShow('materials')">
      <span class="icon-menu3 px-5" :class="{ 'icon-menu4' : showMaterials }"></span>
     <h1>Materials</h1>
   </div>
   <div v-if="showMaterials">
     <div class="flex flex-row flex-wrap w-full text-white py-5 justify-center">
       <div class="flex justify-center items-center" v-for="(material, name) in materials">
         <div class="flex flex-col items-center w-40 py-2" v-if="material.category == 'material'">
             <div class="border p-3 backdrop-blur rounded w-14 h-14" @click="addToObjectives(material)">
                  <div class="w-full h-full" :style="{
                    backgroundImage: 'url(' + material.image.replace('\'', '') +')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                    }">
                  </div>
               </div>
             <p class="pt-2" v-if="showNames && material.names[lang]">{{ material.names[lang].replace(/_/g, ' ') }}</p>
             <input :id="name" placeholder="1" class="w-10 right-44 rounded bg-transparent border border-white  text-sm w-[25%]" type="number">
         </div>
       </div>
     </div>
   </div>
   <div class="backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer" @click="toggleShow('enemies')">
      <span class="icon-menu3 px-5" :class="{ 'icon-menu4' : showEnemies }"></span>
     <h1>Enemies</h1>
   </div>
   <div v-if="showEnemies">
     <div class="flex flex-row flex-wrap w-full text-white py-5 justify-center" v-if="showEnemies">
       <div class="flex justify-center items-center" v-for="(enemy, name) in enemies">
         <div class="flex flex-col items-center w-40 py-2">
           <div class="border p-3 backdrop-blur rounded w-14 h-14" @click="addToObjectives(enemy)">
                  <div class="w-full h-full" :style="{
                    backgroundImage: 'url(' + enemy.image.replace('\'', '') +')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                    }">
                  </div>
               </div>
             <p class="pt-2" v-if="showNames && enemy.names[lang]">{{ enemy.names[lang].replace(/_/g, ' ') }}</p>
             <input :id="name" placeholder="1" class="w-10 right-44 rounded bg-transparent border border-white text-sm w-[25%]" type="number">
         </div>
       </div>
     </div>
   </div>
   <div class="backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer" @click="toggleShow('food')">
      <span class="icon-menu3 px-5" :class="{ 'icon-menu4' : showFood }"></span>
     <h1>Food</h1>
   </div>
   <div v-if="showFood">
    <div class="backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer" @click="toggleShow('material-food')">
      <span class="icon-menu3 pr-5 pl-10" :class="{ 'icon-menu4' : showMaterialFood }"></span>
      <h1>Raw</h1>
    </div>
     <div class="flex flex-row flex-wrap w-full text-white py-5 justify-center" v-if="showMaterialFood">
       <div class="flex justify-center items-center" v-for="(material, name) in materials">
         <div class="flex flex-col items-center w-40 py-2" v-if="material.category == 'food'">
             <div class="border p-3 backdrop-blur rounded w-14 h-14" @click="addToObjectives(material)">
                  <div class="w-full h-full" :style="{
                    backgroundImage: 'url(' + material.image.replace('\'', '') +')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center'
                    }">
                  </div>
               </div>
              <p class="pt-2" v-if="showNames && material.names[lang]">{{ material.names[lang].replace(/_/g, ' ') }}</p>
              <input :id="name" placeholder="1" class="w-10 right-44 rounded bg-transparent border border-white text-sm w-[25%]" type="number">
         </div>
       </div>
     </div>
    <div class="backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer" @click="toggleShow('cooked-food')">
      <span class="icon-menu3 pr-5 pl-10" :class="{ 'icon-menu4' : showCookedFood }"></span>
      <h1>Cooked</h1>
    </div>
     <div class="flex flex-row flex-wrap w-full text-white py-5 justify-center" v-if="showCookedFood">
       <div class="flex justify-center items-center" v-for="(food, name) in foods">
         <div class="flex flex-col items-center w-40 py-2" v-if="food.category == 'cooked'">
             <div class="border p-3 backdrop-blur rounded w-14 h-14" @click="addToObjectives(food)">
               <div class="w-full h-full" :style="{
                        backgroundImage: 'url(' + food.image.replace('\'', '') +')',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center'
                       }">
               </div>
             </div>
             <p class="pt-2" v-if="showNames && food.names[lang]">{{ food.names[lang].replace(/_/g, ' ') }}</p>
             <input :id="name" placeholder="1" class="w-10 right-44 rounded bg-transparent border border-white text-sm w-[25%]" type="number">
         </div>
       </div>
     </div>
    <div class="backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer" @click="toggleShow('roasted')">
      <span class="icon-menu3 pr-5 pl-10" :class="{ 'icon-menu4' : showRoasted }"></span>
      <h1>Roasted</h1>
    </div>
     <div class="flex flex-row flex-wrap w-full text-white py-5 justify-center" v-if="showRoasted">
       <div class="flex justify-center items-center" v-for="(food, name) in foods">
         <div class="flex flex-col items-center w-40 py-2" v-if="food.category == 'roasted'">
             <div class="border p-3 backdrop-blur rounded w-14 h-14" @click="addToObjectives(food)">
               <div class="w-full h-full" :style="{
                        backgroundImage: 'url(' + food.image.replace('\'', '') +')',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center'
                       }">
               </div>
             </div>
             <p class="pt-2" v-if="showNames && food.names[lang]">{{ food.names[lang].replace(/_/g, ' ') }}</p>
             <input :id="name" placeholder="1" class="w-10 right-44 rounded bg-transparent border border-white text-sm w-[25%]" type="number">
         </div>
       </div>
     </div>
    <div class="backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer" @click="toggleShow('frozen')">
      <span class="icon-menu3 pr-5 pl-10" :class="{ 'icon-menu4' : showFrozen }"></span>
      <h1>Frozen</h1>
    </div>
     <div class="flex flex-row flex-wrap w-full text-white py-5 justify-center" v-if="showFrozen">
       <div class="flex justify-center items-center" v-for="(food, name) in foods">
         <div class="flex flex-col items-center w-40 py-2" v-if="food.category == 'frozen'">
             <div class="border p-3 backdrop-blur rounded w-14 h-14" @click="addToObjectives(food)">
               <div class="w-full h-full" :style="{
                        backgroundImage: 'url(' + food.image.replace('\'', '') +')',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center'
                       }">
               </div>
             </div>
             <p class="pt-2" v-if="showNames && food.names[lang]">{{ food.names[lang].replace(/_/g, ' ') }}</p>
             <input :id="name" placeholder="1" class="w-10 right-44 rounded bg-transparent border border-white text-sm w-[25%]" type="number">
         </div>
       </div>
     </div>
    <div class="backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer" @click="toggleShow('elixir')">
      <span class="icon-menu3 pr-5 pl-10" :class="{ 'icon-menu4' : showElixir }"></span>
      <h1>Elixir</h1>
    </div>
     <div class="flex flex-row flex-wrap w-full text-white py-5 justify-center" v-if="showElixir">
       <div class="flex justify-center items-center" v-for="(food, name) in foods">
         <div class="flex flex-col items-center w-40 py-2" v-if="food.category == 'elixir'">
             <div class="border p-3 backdrop-blur rounded w-14 h-14" @click="addToObjectives(food)">
               <div class="w-full h-full" :style="{
                        backgroundImage: 'url(' + food.image.replace('\'', '') +')',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center'
                       }">
               </div>
             </div>
             <p class="pt-2" v-if="showNames && food.names[lang]">{{ food.names[lang].replace(/_/g, ' ') }}</p>
             <input :id="name" placeholder="1" class="w-10 right-44 rounded bg-transparent border border-white text-sm w-[25%]" type="number">
         </div>
       </div>
     </div>
   </div>
 </div>
</div>
<p class="text-xs bottom-0 right-6 fixed">v.Beta-0.3.0</p>
<p class="text-xs bottom-4 left-2 fixed text-white">Click on the objective to complete it</p>
<p class="text-xs bottom-0 left-2 fixed text-white">Double click to remove it</p>
</template>


<style scoped>

</style>
