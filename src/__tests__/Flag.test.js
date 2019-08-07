import { mount } from '@vue/test-utils'
import Flag from '../Flag.vue'

describe('Test different flag sizes', () => {
  test('Should render a small dutch flag', () => {
    const component = mount(Flag, {
      propsData: {
        code: 'NL',
        size: 's'
      },
      sync: false
    })

    expect(component.element).toMatchSnapshot()
    expect(component.classes()).toStrictEqual([
      'flag',
      'size-s',
      'border-radius',
      'border'
    ])
  })

  test('Should render a medium dutch flag', () => {
    const component = mount(Flag, {
      propsData: {
        code: 'NL',
        size: 'm'
      },
      sync: false
    })

    expect(component.element).toMatchSnapshot()
    expect(component.classes()).toStrictEqual([
      'flag',
      'size-m',
      'border-radius',
      'border'
    ])
  })

  test('Should render a large dutch flag', () => {
    const component = mount(Flag, {
      propsData: {
        code: 'NL',
        size: 'l'
      },
      sync: false
    })

    expect(component.element).toMatchSnapshot()
    expect(component.classes()).toStrictEqual([
      'flag',
      'size-l',
      'border-radius',
      'border'
    ])
  })

  test('Test default size (should be large)', () => {
    const component = mount(Flag, {
      propsData: {
        code: 'NL'
      },
      sync: false
    })

    expect(component.element).toMatchSnapshot()
    expect(component.classes()).toStrictEqual([
      'flag',
      'size-l',
      'border-radius',
      'border'
    ])
  })
})

describe('Test the different props', () => {
  test('Should render a large US flag with drop shadow', () => {
    const component = mount(Flag, {
      propsData: {
        code: 'US',
        dropshadow: true
      },
      sync: false
    })

    expect(component.element).toMatchSnapshot()
    expect(component.classes()).toStrictEqual([
      'flag',
      'size-l',
      'border-radius',
      'border',
      'dropshadow'
    ])
  })

  test('Should render a large US flag with a custom classname', () => {
    const component = mount(Flag, {
      propsData: {
        code: 'US',
        className: 'custom-flag-class'
      },
      sync: false
    })

    expect(component.element).toMatchSnapshot()
    expect(component.classes()).toStrictEqual([
      'flag',
      'size-l',
      'border-radius',
      'border',
      'custom-flag-class'
    ])
  })

  test('Should render a large Belgium flag with a real-linear gradient', () => {
    const component = mount(Flag, {
      propsData: {
        code: 'BE',
        gradient: 'real-linear'
      },
      sync: false
    })

    expect(component.element).toMatchSnapshot()
    expect(component.classes()).toStrictEqual([
      'flag',
      'size-l',
      'border-radius',
      'border',
      'real-linear'
    ])
  })

  test('Should render a large Belgium flag with a top-down gradient', () => {
    const component = mount(Flag, {
      propsData: {
        code: 'BE',
        gradient: 'top-down'
      },
      sync: false
    })

    expect(component.element).toMatchSnapshot()
    expect(component.classes()).toStrictEqual([
      'flag',
      'size-l',
      'border-radius',
      'border',
      'top-down'
    ])
  })

  test('Should render a large Belgium flag with a real-circular gradient', () => {
    const component = mount(Flag, {
      propsData: {
        code: 'BE',
        gradient: 'real-circular'
      },
      sync: false
    })

    expect(component.element).toMatchSnapshot()
    expect(component.classes()).toStrictEqual([
      'flag',
      'size-l',
      'border-radius',
      'border',
      'real-circular'
    ])
  })

  test('Should render a large Belgium flag without a border.', () => {
    const component = mount(Flag, {
      propsData: {
        code: 'BE',
        hasBorder: false
      },
      sync: false
    })

    expect(component.element).toMatchSnapshot()
    expect(component.classes()).toStrictEqual([
      'flag',
      'size-l',
      'border-radius'
    ])
  })

  test('Should render a large Italian flag with a border.', () => {
    const component = mount(Flag, {
      propsData: {
        code: 'IT',
        hasBorder: true
      },
      sync: false
    })

    expect(component.element).toMatchSnapshot()
    expect(component.classes()).toStrictEqual([
      'flag',
      'size-l',
      'border-radius',
      'border'
    ])
  })

  test('Should render a large Italian flag with a 10px border radius.', () => {
    const component = mount(Flag, {
      propsData: {
        code: 'IT',
        customBorderRadius: '10px'
      },
      sync: false
    })

    expect(component.element).toMatchSnapshot()
    expect(component.classes()).toStrictEqual([
      'flag',
      'size-l',
      'border-radius',
      'border'
    ])
    expect(component.attributes('style')).toBe("border-radius: 10px;")
  })

  test('Should render a large Italian flag with no border radius.', () => {
    const component = mount(Flag, {
      propsData: {
        code: 'IT',
        hasBorderRadius: false
      },
      sync: false
    })

    expect(component.element).toMatchSnapshot()
    expect(component.classes()).toStrictEqual([
      'flag',
      'size-l',
      'border'
    ])
  })
})

test('Component with no flag code given along.', () => {
  const component = mount(Flag, {
    sync: false
  })

  expect(component.element).toMatchSnapshot()
  expect(component.classes()).toStrictEqual([
    'flag',
    'size-l',
    'border-radius',
    'border'
  ])
})

describe('Tests if image url are correct', () => {
  const IMG_URL = 'https://raw.githubusercontent.com/Yummygum/flag-pack-core/master/svg'

  test('Japan - large', () => {
    const component = mount(Flag, {
      propsData: {
        code: 'JO',
        size: 'l'
      },
      sync: false
    })

    const image = component.find('img')

    expect(image.attributes('src')).toBe(`${IMG_URL}/l/JO.svg?sanitize=true`)
  })

  test('Japan - medium', () => {
    const component = mount(Flag, {
      propsData: {
        code: 'JO',
        size: 'm'
      },
      sync: false
    })

    const image = component.find('img')

    expect(image.attributes('src')).toBe(`${IMG_URL}/m/JO.svg?sanitize=true`)
  })

  test('Japan - small', () => {
    const component = mount(Flag, {
      propsData: {
        code: 'JO',
        size: 's'
      },
      sync: false
    })

    const image = component.find('img')

    expect(image.attributes('src')).toBe(`${IMG_URL}/s/JO.svg?sanitize=true`)
  })
})

describe('Test giving different types of Iso codes', () => {
  const IMG_URL = 'https://raw.githubusercontent.com/Yummygum/flag-pack-core/master/svg'

  test('Canada - numeric', () => {
    const component = mount(Flag, {
      propsData: {
        code: '124',
        size: 's'
      },
      sync: false
    })

    const image = component.find('img')

    expect(image.attributes('src')).toBe(`${IMG_URL}/s/CA.svg?sanitize=true`)
  })

  test('Canada - Alpha-3', () => {
    const component = mount(Flag, {
      propsData: {
        code: 'CAN',
        size: 's'
      },
      sync: false
    })

    const image = component.find('img')

    expect(image.attributes('src')).toBe(`${IMG_URL}/s/CA.svg?sanitize=true`)
  })
})
