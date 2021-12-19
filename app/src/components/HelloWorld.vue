<script>
import { onMounted, ref } from 'vue'
import axios from 'axios'

export default {
  setup() {
    const weapons = ref([])
    const bows = ref([])
    const shields = ref([])
    const armors = ref([])
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

    onMounted(() => {
      axios.get('api/api.json')
      .then(res => {
        console.log(res.data)
        weapons.value = res.data.weapons
        bows.value = res.data.bows
        shields.value = res.data.shields
        armors.value = res.data.armors
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
        }
    }

    return { weapons, lang, showWeapons, showOneHanded, showTwoHanded, showSpear, toggleShow, bows, showBows, shields, showShields, armors, showArmors, showHeads, showBodies, showLegs}
  }
}

</script>

<template>
<h1 class="bg-gray-600 text-left text-m font-bold text-white px-5 py-2" @click="toggleShow('weapons')">> Weapons</h1>
<div v-if="showWeapons">
  <h1 class="bg-gray-800 text-left text-m font-bold text-white px-10 py-2" @click="toggleShow('one-handed')">> One handed</h1>
  <div class="flex flex-row flex-wrap bg-gray-800 w-full text-white py-5" v-if="showOneHanded">
    <div class="flex justify-center items-center" v-for="(weapon, name) in weapons">
      <div class="flex flex-col items-center h-50 w-60" v-if="weapon.category == 'one-handed'">
          <img class="border p-3 bg-gray-600 rounded w-20 h-20" :src="weapon.image">
          <p class="py-2" v-if="weapon.names[lang]">{{ weapon.names[lang].replace(/_/g, ' ') }}</p>
      </div>
    </div>
  </div>
  <h1 class="bg-gray-800 text-left text-m font-bold text-white px-10 py-2" @click="toggleShow('two-handed')">> Two handed</h1>
  <div class="flex flex-row flex-wrap bg-gray-800 w-full text-white py-5" v-if="showTwoHanded">
    <div class="flex justify-center items-center" v-for="(weapon, name) in weapons">
      <div class="flex flex-col items-center h-50 w-60" v-if="weapon.category == 'two-handed'">
          <img class="border p-3 bg-gray-600 rounded w-20 h-20" :src="weapon.image">
          <p class="py-2" v-if="weapon.names[lang]">{{ weapon.names[lang].replace(/_/g, ' ') }}</p>
      </div>
    </div>
  </div>
  <h1 class="bg-gray-800 text-left text-m font-bold text-white px-10 py-2" @click="toggleShow('spear')">> Spear</h1>
  <div class="flex flex-row flex-wrap bg-gray-800 w-full text-white py-5" v-if="showSpear">
    <div class="flex justify-center items-center" v-for="(weapon, name) in weapons">
      <div class="flex flex-col items-center h-50 w-60" v-if="weapon.category == 'spear'">
          <img class="border p-3 bg-gray-600 rounded w-20 h-20" :src="weapon.image">
          <p class="py-2" v-if="weapon.names[lang]">{{ weapon.names[lang].replace(/_/g, ' ') }}</p>
      </div>
    </div>
  </div>
</div>
<h1 class="bg-gray-600 text-left text-m font-bold text-white px-5 py-2" @click="toggleShow('bows')">> Bows</h1>
<div v-if="showBows">
  <div class="flex flex-row flex-wrap bg-gray-800 w-full text-white py-5" v-if="showBows">
    <div class="flex justify-center items-center" v-for="(bows, name) in bows">
      <div class="flex flex-col items-center h-50 w-60">
          <img class="border p-3 bg-gray-600 rounded w-20 h-20" :src="bows.image">
          <p class="py-2" v-if="bows.names[lang]">{{ bows.names[lang].replace(/_/g, ' ') }}</p>
      </div>
    </div>
  </div>
</div>
<h1 class="bg-gray-600 text-left text-m font-bold text-white px-5 py-2" @click="toggleShow('shields')">> Shields</h1>
<div v-if="showShields">
  <div class="flex flex-row flex-wrap bg-gray-800 w-full text-white py-5" v-if="showShields">
    <div class="flex justify-center items-center" v-for="(shields, name) in shields">
      <div class="flex flex-col items-center h-50 w-60">
          <img class="border p-3 bg-gray-600 rounded w-20 h-20" :src="shields.image">
          <p class="py-2" v-if="shields.names[lang]">{{ shields.names[lang].replace(/_/g, ' ') }}</p>
      </div>
    </div>
  </div>
</div>
<h1 class="bg-gray-600 text-left text-m font-bold text-white px-5 py-2" @click="toggleShow('armors')">> Armors</h1>
<div v-if="showArmors">
  <h1 class="bg-gray-800 text-left text-m font-bold text-white px-10 py-2" @click="toggleShow('heads')">> Head</h1>
  <div class="flex flex-row flex-wrap bg-gray-800 w-full text-white py-5" v-if="showHeads">
    <div class="flex justify-center items-center" v-for="(armor, name) in armors">
      <div class="flex flex-col items-center h-50 w-60" v-if="armor.category == 'head'">
          <img class="border p-3 bg-gray-600 rounded w-20 h-20" :src="armor.image">
          <p class="py-2" v-if="armor.names[lang]">{{ armor.names[lang].replace(/_/g, ' ') }}</p>
      </div>
    </div>
  </div>
  <h1 class="bg-gray-800 text-left text-m font-bold text-white px-10 py-2" @click="toggleShow('bodies')">> Body</h1>
  <div class="flex flex-row flex-wrap bg-gray-800 w-full text-white py-5" v-if="showBodies">
    <div class="flex justify-center items-center" v-for="(armor, name) in armors">
      <div class="flex flex-col items-center h-50 w-60" v-if="armor.category == 'body'">
          <img class="border p-3 bg-gray-600 rounded w-20 h-20" :src="armor.image">
          <p class="py-2" v-if="armor.names[lang]">{{ armor.names[lang].replace(/_/g, ' ') }}</p>
      </div>
    </div>
  </div>
  <h1 class="bg-gray-800 text-left text-m font-bold text-white px-10 py-2" @click="toggleShow('legs')">> Legs</h1>
  <div class="flex flex-row flex-wrap bg-gray-800 w-full text-white py-5" v-if="showLegs">
    <div class="flex justify-center items-center" v-for="(armor, name) in armors">
      <div class="flex flex-col items-center h-50 w-60" v-if="armor.category == 'leg'">
          <img class="border p-3 bg-gray-600 rounded w-20 h-20" :src="armor.image">
          <p class="py-2" v-if="armor.names[lang]">{{ armor.names[lang].replace(/_/g, ' ') }}</p>
      </div>
    </div>
  </div>
</div>
</template>


<style scoped>

</style>
