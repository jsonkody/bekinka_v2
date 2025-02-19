<script setup lang="ts">
const { size } = defineProps({
   size: {
      type: String,
      default: '24' // Výchozí velikost pro šířku a výšku SVG
   }
})
</script>

<template>
   <svg
      :width="size"
      :height="size"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
   >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 21v-2a4 4 0 0 1 4 -4h2" />
      <path
         d="M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5z"
      />
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
   </svg>
   <!-- <svg viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M17 11C17 17 10 18 10 18C10 18 3 16.5 3 11V4L10 2L17 4V11ZM11.4142 8.41421C11.7893 8.03914 12 7.53043 12 7C12 6.46957 11.7893 5.96086 11.4142 5.58579C11.0391 5.21071 10.5304 5 10 5C9.46957 5 8.96086 5.21071 8.58579 5.58579C8.21072 5.96086 8 6.46957 8 7C8 7.53043 8.21072 8.03914 8.58579 8.41421C8.96086 8.78929 9.46957 9 10 9C10.5304 9 11.0391 8.78929 11.4142 8.41421ZM7.29942 11.7914C8.10528 11.2745 9.04261 10.9998 10 11C10.9574 10.9998 11.8947 11.2745 12.7006 11.7914C13.5065 12.3083 14.147 13.0457 14.546 13.916C13.9833 14.5706 13.2857 15.0958 12.5011 15.4555C11.7164 15.8152 10.8632 16.0009 10 16C9.13681 16.0009 8.28362 15.8152 7.49895 15.4555C6.71428 15.0958 6.01668 14.5706 5.454 13.916C5.85305 13.0457 6.49356 12.3083 7.29942 11.7914Z"
			fill="currentColor" />
	</svg> -->
</template>



export default function Min() {
	return (
		<svg className="h-5 w-5 inline-block" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M10.5 12H11V11H10.5V12ZM4 12H10.5V11H4V12Z" fill="currentColor"/>
		</svg>
	)
}
