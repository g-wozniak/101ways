import hello from '../src/app'

describe('App', () => {
   test('dummy', () => {
      expect(hello()).toEqual('text')
   })
})