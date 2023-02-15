<script setup>
  import Panel from 'primevue/panel';
  import { ref, computed, reactive } from 'vue';
  import InputNumber from 'primevue/inputnumber';
  import Dropdown from 'primevue/dropdown';
  import Button from 'primevue/button';
  import InlineMessage from 'primevue/inlinemessage';
  import { minValue } from '@vuelidate/validators';
  import { useVuelidate } from '@vuelidate/core';

  const income = ref(0);
  const result = ref(0);
  const calcMonthly = ref(false);

  const acceptedStrtg = (value) => {
    if (value === 3 && form.deposit > 9) return true;
    if (value === 3.3 && form.deposit > 1000) return true;
    return false;
  };

  const form = reactive({
    deposit: 10,
    selectedStrategy: 3,
    selectedPeriod: 1,
  });

  const rules = {
    deposit: { minValue: minValue(10) },
    selectedStrategy: {
      minValue: minValue(3),
      acceptedStrtg,
    },
    selectedPeriod: { minValue: minValue(1) },
  };

  const v$ = useVuelidate(rules, form);

  // COMPUTED
  const strategies = computed(() => [
    {
      text: 'Alpha 3% / day',
      value: 3,
    },
    {
      text: 'Double moving average 3.3% / day',
      value: 3.3,
    },
    {
      text: 'Exponential enhancement 3.7% / day',
      value: 3.7,
    },
    {
      text: 'Grid transaction 4% / day',
      value: 4,
    },
    {
      text: 'Martingale strategy 4.5% / day',
      value: 4.5,
    },
    {
      text: 'High Frequency Trading strategies 5% / day',
      value: 5,
    },
    {
      text: 'Neumann trading strategy 9.8% / day',
      value: 9.8,
    },
  ]);
  const period = computed(() => {
    let arr = [];
    const periodText = calcMonthly.value ? 'month' : 'day(s)';
    for (let index = 1; index <= 30; index++) {
      const periodValue = calcMonthly.value ? index * 30 : index;
      arr.push({ text: `${index} ${periodText}`, value: periodValue });
    }
    return arr;
  });

  // METHODS
  const calcPercent = () => {
    const rate = form.selectedStrategy / 100;

    result.value = calcProfit(form.deposit, rate, form.selectedPeriod).toFixed(
      4
    );
    income.value = (result.value - form.deposit).toFixed(4);
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
  <Panel header="Calculate your profit (Neuman Wallet)">
    <div class="grid">
      <div class="col-12 field mb-2">
        <label for="deposit" class="text-sm">Deposit</label>
        <div class="p-inputgroup">
          <span class="p-inputgroup-addon">$</span>
          <InputNumber
            inputId="deposit"
            v-model="v$.deposit.$model"
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
          v-model="v$.selectedStrategy.$model"
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
          v-model="v$.selectedPeriod.$model"
          :options="period"
          optionLabel="text"
          optionValue="value"
          placeholder="Select a strategy"
          class="w-full"
        />
        <label>
          <input type="checkbox" v-model="calcMonthly" />
          Calculate per month
        </label>
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
          :disabled="v$.$invalid"
        />
      </div>
    </div>
  </Panel>
</template>

<style scoped></style>
