import { shallowMount } from '@vue/test-utils'
import StarsVote from '@/components/StarsVote/StarsVote.vue'

test('component template', () => {
  const wrapper = shallowMount(StarsVote, {
    propsData: {
      dummyProp: true,
    },
  })
  expect(wrapper.get('[data-testid="dummy-prop"]').text()).toBe('hello')
})

test('component validator', () => {
  // @ts-ignore
  expect(StarsVote.props.dummyProp.validator('bad value')).toBe(false)
})
