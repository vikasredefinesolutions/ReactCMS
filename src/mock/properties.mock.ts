export const properties = {
  breadcrumb: {
    position: 'Left',
    bg_color: '#4e4e4e',
    hover_bg_color: '#4e4e4e',
    text_color: '#g4g4g4',
    hover_text_color: '#4e4e4e',
  },

  banner_box_top: {
    html: '<div>Entire HTML goes Here</div>',
  },

  banner: {
    type: 'type1',
  },

  banner_box_bottom: {
    html: '<div>Entire HTML goes Here</div>',
  },

  filter_box: {
    layout: 'sidefilter',
    // filter_option: [size, color, category, type, price, review_rating, brand, discount]
  },

  result_box: {
    layout: 'unset',
    showGrid: false,
  },

  product_list_box: {
    box_count: 3,
    column_select: 4,
    alignment: 'Center',
    product_info: {
      brand: true,
      product_name: {
        display: true,
        font_size: 'small',
        text_style: 'normal',
        color: '#4e4e4e',
      },
      price: true,
      color: {
        display: false,
        view_option: 'rounded / square',
      },
      short_description: {
        display: true,
        font_size: 'small',
        text_style: 'normal',
      },
      product_rating: true,
    },
    availability: true,
    add_to_cart: true,
    tags: false,
  },
  product: {
    size_input: 'select',
    isMultiple: true
  },
};
