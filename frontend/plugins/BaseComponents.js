import Vue from 'vue'
import Base from '~/components/base'

const components = { ...Base }
const componentList = Object.entries(components)
componentList.forEach(component => Vue.component(...component))