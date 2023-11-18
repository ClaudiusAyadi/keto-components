# PriceCard Keto Component

This React component, **PriceCard**, is a versatile and customizable pricing card component designed to showcase different pricing plans for products or services. It is particularly well-suited for use on websites that offer multiple subscription levels or service tiers.

## Features

- **Dynamic Pricing Plans:** The component dynamically renders pricing plans based on the data provided in the `plans` array.
- **Icon Integration:** Each pricing plan comes with an associated icon, providing a visual representation of the plan's theme.
- **Responsive Design:** The component is built with a mobile-first approach, ensuring a seamless experience across various devices.
- **Schema.org Markup:** The component includes structured data markup using the Schema.org vocabulary, enhancing search engine visibility and accessibility.

## Usage

To use the `PriceCard` component, follow these steps:

1. Clone or download this repo
2. **Import and render component:**

   ```javascript
   import PriceCard from "path/to/PriceCard";

   <PriceCard />;
   ```

3. Ensure you are using [KetoCSS](https://github.com/ClaudiusAyadi/ketocss) in your project.

## Customization

The component is highly customizable. To modify the pricing plans or appearance, update the plans array in the utils/plans file. Adjust the styles by leveraging the power of KetoCSS, a super-performant, variable-based, mobile-first, React-based, lean atomic design framework.

## Example Plan Structure

Each plan in the plans array has the following structure:

- <span style="color: teal;">title</span>: The name of the pricing plan.
- <span style="color: teal;">icon</span>: The icon associated with the plan, rendered using the @iconify/react package.
- <span style="color: teal;">byline</span>: A brief description or tagline for the pricing plan.
- <span style="color: teal;">currency</span>: The currency in which the prices are denominated.
- <span style="color: teal;">symbol</span>: The currency symbol.
- <span style="color: teal;">amount</span>: The original price before any discount.
- <span style="color: teal;">discount</span>: The discounted price.
- <span style="color: teal;">features</span>: An array of features included in the pricing plan.
- <span style="color: teal;">button</span>: The text for the action button associated with the plan.

## KetoCSS Framework

This component is powered by [KetoCSS](https://github.com/ClaudiusAyadi/ketocss), a super-performant, variable-based, mobile-first, React-based, lean atomic design framework. KetoCSS provides a solid foundation for styling React components and ensures optimal performance.

For more information on KetoCSS, visit [KetoCSS GitHub Repository](https://github.com/ClaudiusAyadi/ketocss).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.
Let's connect on [Twitter](https://twitter.com/ClaudiusAyadi)

## License

All components in this repo are licensed under the [MIT](https://opensource.org/license/MIT/) License. Feel free to use, modify, and distribute it as needed.
