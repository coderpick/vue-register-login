<script setup>
        const items =[        
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 22 },      
        ]
</script>

<template>
    <div>
         <div>
        <h1>List of People</h1>
        <ul>
          <li v-for="(item, index) in items" :key="index">
            <strong>Name:</strong> {{ item.name }}, <strong>Age:</strong> {{ item.age }}
          </li>
        </ul>
      </div>
    </div>
</template>

