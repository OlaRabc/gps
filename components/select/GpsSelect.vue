<template>
  <div
    ref="dropdown"
    role="combobox"
    :class="[
      'dropdown rounded-xl md:relative font-bold shadow-[-2px_6px_8px_0_rgba(0,0,0,0.5)]',
      isDropdownOpen ? 'z-30' : 'z-10',
    ]"
  >
    <div
      :tabindex="0"
      :class="[
        'rounded-xl relative py-3 pl-6 pr-12 bg-white border border-black text-nowrap overflow-hidden outline-offset-2 z-[40] transition-all delay-[50ms]',
        focusedElement === 'select' && isDropdownOpen
          ? 'text-indigo-700'
          : 'text-gray-500',
        { 'md:border-b-0 md:rounded-b-none': isDropdownOpen },
      ]"
      @click="handleDropdown"
    >
      {{ selected ? selected : props.placeholder }}
      <div
        class="absolute top-0 right-0 w-14 h-full bg-gradient-to-l from-75% from-white to-rgba(0,0,0,0.5) z-10"
      >
        <ClientOnly>
          <font-awesome-icon
            :icon="['fas', 'caret-down']"
            :class="[
              'absolute right-4 top-1/2 -translate-y-1/2 text-black text-3xl transition-all',
              { 'rotate-180': isDropdownOpen },
            ]"
          />
        </ClientOnly>
      </div>
    </div>
    <Transition>
      <div
        v-if="isDropdownOpen"
        class="absolute max-md:bottom-0 max-md:left-0 w-full bg-white border border-black rounded-t-xl max-md:rounded-b-none md:rounded-t-none overflow-y-hidden z-30 shadow-[-2px_-1px_8px_0_rgba(0,0,0,0.5)] transition-all rounded-b-xl"
      >
        <div class="w-full max-h-[40vh] overflow-y-auto">
          <GpsSelectItem
            v-if="options.length"
            v-for="item in options"
            :key="item"
            :focused="focusedElement === item"
            role="option"
            @click="
              changeSelected(item);
              hideDropdown();
            "
            @mouseover="changeFocus(item)"
            @mouseout="clearFocus"
          >
            {{ item }}
          </GpsSelectItem>
          <GpsSelectItemError v-else />
        </div>
      </div>
    </Transition>
    <select
      tabindex="-1"
      :name="props.name"
      class="absolute top-0 left-0 w-0 h-0 opacity-0"
    >
      <option
        v-for="item in options"
        :key="item"
        :value="item"
        class="opacity-0 w-0 h-0"
      >
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  options: {
    type: Array as PropType<string[]>,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
    default: "Wybierz",
  },
});

const dropdown = ref<HTMLDivElement | null>(null);

const focusedElement: Ref<string> = ref("");

const selected: Ref<string> = ref("");
const isDropdownOpen: Ref<Boolean> = ref(false);

const emit = defineEmits(["onChange"]);

const changeSelected = (newValue: string) => {
  selected.value = newValue;
  emit("onChange", newValue);
};

const changeFocus = (newValue: string) => {
  focusedElement.value = newValue;
};

const clearFocus = () => {
  focusedElement.value = "select";
};

const handleDropdown = () => {
  if (isDropdownOpen.value === false) {
    showDropdown();
  } else {
    if (focusedElement.value !== "select") changeSelected(focusedElement.value);

    hideDropdown();
  }
};

const showDropdown = () => {
  isDropdownOpen.value = true;
};

const hideDropdown = () => {
  isDropdownOpen.value = false;
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease, transform 0.4s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-10%);
}
</style>
