<template>
    <b-container>
      <hr/>
      <hr/>
      <hr/>
      <b-row>
        <b-col> 
          <b-table
            responsive
            sticky-header="500px"
            dark
            striped
            selectable
            selected-variant
            bordered
            ref="selectableTable"
            :select-head="false"
            :fields="data.fields"
            :items="data.items"
            @row-clicked="(row:any, index:any, e:any) => rowSelected(row, index, e)">
            <template #row-details="data">
              <b-card style="margin-bottom: 10px;">
                <b-row class="text-center">
                  <b-col>
                    hello
                  </b-col>
                </b-row>
              </b-card>
            </template>
          </b-table>
        </b-col>
      </b-row>
      <hr/>
      <hr/>
      <hr/>
    </b-container>
  </template>
  
  <script lang="ts">
  import {reactive, ref, defineComponent} from "vue"
  import type {Ref} from "vue"
  import type { BTableProvider } from "./types";
  import { select } from "./utils";
  // You can use this file as a development spot to test your changes
  // Please do not commit this file
  
  export default defineComponent({
    setup() {
      const data = reactive({
        // Note `isActive` is left out and will not appear in the rendered table
        fields: ['first_name', 'last_name', 'age'],
        items: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' },
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' },
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' },
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      })
  
      const selectableTable = ref(null) as any;
      const rowSelected = (row: any, index:any, e:any) => {
        setTimeout(() => {
          selectableTable.value.unselectRow(index)
          row._showDetails = !row._showDetails
        }, 1)
      }
  
      return {
        data,
        selectableTable,
        rowSelected
      }
    }
  })
  </script>
  