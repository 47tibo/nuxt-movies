import { shallowMount } from '@vue/test-utils'
import StarsVote from '@/components/StarsVote/StarsVote.vue'

test('should accept numbers between 0 & 10', () => {
  const Component = StarsVote as any
  expect(Component.props.voteAverage.validator('a string')).toBe(false)
  expect(Component.props.voteAverage.validator(1000)).toBe(false)
  expect(Component.props.voteAverage.validator(2.6)).toBe(true)
  expect(Component.props.voteAverage.validator(0)).toBe(true)
})

test('should convert the voteAverage to base 5', () => {
  const wrapper = shallowMount(StarsVote, {
    propsData: {
      voteAverage: 4,
    },
  })
  const vm = wrapper.vm as any
  expect(vm.vote).toBe(2)
})
