import { shallowMount } from '@vue/test-utils'
import Search from '@/components/Search/Search.vue'

test('Search can return the current typed value', async () => {
  const wrapper = shallowMount(Search)
  await wrapper.find('[data-testid="search-input"]').setValue('die hard')
  await wrapper.find('form').trigger('submit.prevent')
  const emitted = wrapper.emitted('submit') as any[]
  expect(emitted[0]).toEqual(['die hard'])
})

test('Search should not emit an empty string', async () => {
  const wrapper = shallowMount(Search)
  await wrapper.find('[data-testid="search-input"]').setValue('   ')
  await wrapper.find('form').trigger('submit.prevent')
  const emitted = wrapper.emitted('submit') as any[]
  expect(emitted).toBe(undefined)
})