<script setup>
  import Panel from 'primevue/panel';
  import { ref, computed } from 'vue';
  import InputNumber from 'primevue/inputnumber';
  import Dropdown from 'primevue/dropdown';
  import Button from 'primevue/button';
  import InlineMessage from 'primevue/inlinemessage';

  const income = ref(0);
  const result = ref(0);
  const deposit = ref(10);
  const selectedStrategy = ref(0.21);
  const selectedPeriod = ref(1);

  // COMPUTED
  const strategies = computed(() => [
    {
      text: '2 hours',
      value: 0.21,
      hours: 2,
    },
    {
      text: '12 hours',
      value: 1.2,
      hours: 12,
    },
    {
      text: '24 hours',
      value: 2.5,
      hours: 24,
    },
    {
      text: '72 hours',
      value: 7.5,
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
      const textValue = days ? `${days} day(s)` : `${hours} hours`;
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
      console.log(result);
    }
    return result;
  };
</script>

<template>
  <Panel header="Calculate your profit (ESOM)">
    <div class="grid">
      <div class="col-12 field mb-2">
        <label for="deposit" class="text-sm">Deposit</label>
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
        <label for="strategy" class="text-sm">Strategy</label>
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
        <label for="strategies" class="text-sm"
          >Period (with re-investments)</label
        >
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
          <p class="m-0 mb-3">Approximately:</p>
          <InlineMessage severity="success"
            >Total amount: ~{{ result }}
            <span>$</span>
          </InlineMessage>
        </div>
        <div class="mb-2">
          <InlineMessage severity="success"
            >Personal income: ~{{ income }}
            <span>$</span>
          </InlineMessage>
        </div>
      </div>
      <div class="col-12">
        <Button
          @click="calcPercent"
          class="w-full md:w-min"
          label="Calculate"
          icon="pi pi-calculator"
        />
      </div>
    </div>
  </Panel>
</template>

<style scoped></style>
