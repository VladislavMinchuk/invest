<script setup>
  import Panel from 'primevue/panel';
  import { ref, computed } from 'vue';
  import InputNumber from 'primevue/inputnumber';
  import Dropdown from 'primevue/dropdown';
  import Button from 'primevue/button';
  import InlineMessage from 'primevue/inlinemessage';
  import locales from '@/locales';
  
  const loc = computed(() => locales);
  const income = ref(0);
  const result = ref(0);
  const deposit = ref(10);
  const selectedStrategy = ref(0.25);
  const selectedPeriod = ref(1);

  // COMPUTED
  const strategies = computed(() => [
    {
      text: `2 ${locales.ukr.hours}`,
      value: 0.25,
      hours: 2,
    },
    {
      text: `12 ${locales.ukr.hours}`,
      value: 1.5,
      hours: 12,
    },
    {
      text: `24 ${locales.ukr.hours}`,
      value: 3,
      hours: 24,
    },
    {
      text: `72 ${locales.ukr.hours}`,
      value: 9,
      hours: 72,
    },
  ]);
  const selectedhours = computed(
    () => strategies.value.find((i) => i.value === selectedStrategy.value).hours
  );
  const period = computed(() => {
    let arr = [];
    for (let index = 1; index <= 30; index++) {
      const hours = selectedhours.value * index;
      const days = hours % 24 === 0 ? hours / 24 : 0;
      const textValue = days ? `${days} ${locales.ukr.days}` : `${hours} ${locales.ukr.hours}`;
      arr.push({ text: textValue, value: index });
    }
    return arr;
  });

  // METHODS
  const calcPercent = () => {
    const rate = selectedStrategy.value / 100;

    result.value = calcProfit(
      deposit.value,
      rate,
      selectedPeriod.value
    ).toFixed(4);
    income.value = (result.value - deposit.value).toFixed(4);
  };

  const calcProfit = (amount, percent, times) => {
    let result = amount;
    for (let index = 0; index < times; index++) {
      result = (percent + 1) * result;
    }
    return result;
  };
</script>

<template>
  <Panel :header="`${loc.ukr.calculateProfit} (ESOM)`">
    <div class="grid">
      <div class="col-12 field mb-2">
        <label for="deposit" class="text-sm">{{ loc.ukr.deposit }}</label>
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">$</span>
          <InputNumber
            inputId="deposit"
            v-model="deposit"
            placeholder="Deposit"
            mode="decimal"
            locale="en-US"
            :min="10"
            :minFractionDigits="2"
            :maxFractionDigits="4"
          />
        </div>
      </div>

      <div class="col-12 field mb-2">
        <label for="strategy" class="text-sm">{{ loc.ukr.strategy }}</label>
        <Dropdown
          inputId="strategy"
          v-model="selectedStrategy"
          :options="strategies"
          optionLabel="text"
          optionValue="value"
          placeholder="Select a strategy"
          class="w-full"
        />
      </div>

      <div class="col-12 field mb-2">
        <label for="strategies" class="text-sm">{{ loc.ukr.period }}</label>
        <Dropdown
          id="strategies"
          v-model="selectedPeriod"
          :options="period"
          optionLabel="text"
          optionValue="value"
          placeholder="Select a strategy"
          class="w-full"
        />
      </div>
      <div class="col-12" v-if="result">
        <div class="mb-2">
          <p class="m-0 mb-3">{{ loc.ukr.approximately }}:</p>
          <InlineMessage severity="success">{{ loc.ukr.totalAmount }}: ~{{ result }}
            <span>$</span>
          </InlineMessage>
        </div>
        <div class="mb-2">
          <InlineMessage severity="success">{{ loc.ukr.personalIncome }}: ~{{ income }}
            <span>$</span>
          </InlineMessage>
        </div>
      </div>
      <div class="col-12">
        <Button
          @click="calcPercent"
          class="w-full md:w-min"
          :label="loc.ukr.calculate"
          icon="pi pi-calculator"
        />
      </div>
    </div>
  </Panel>
</template>

<style scoped></style>
