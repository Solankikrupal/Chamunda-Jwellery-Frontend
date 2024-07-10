import React from 'react'

type Props = {}

const ProductPage = (props: Props) => {
  return (
    <div className="p-4 py-10">
    {/* <div className="text-sm text-muted-foreground mb-4">
      <a href="#" className="hover:text-primary">
        Home
      </a>{' '}
      |{' '}
      <a href="#" className="hover:text-primary">
        Product
      </a>{' '}
      |<span className="text-primary">Glamorous Floral Diamond Stud Earrings</span>
    </div> */}
    <div className="flex flex-col md:flex-row">
      <div className="flex items-start justify-start gap-5 md:w-1/2">
      <div className="flex flex-col  gap-5 ">
          <img src="https://placehold.co/100x100" alt="Thumbnail 1" className="w-16 h-16 rounded-lg border" />
          <img src="https://placehold.co/100x100" alt="Thumbnail 2" className="w-16 h-16 rounded-lg border" />
          <img src="https://placehold.co/100x100" alt="Thumbnail 3" className="w-16 h-16 rounded-lg border" />
        </div>
        <div className="relative">
          <img src="https://placehold.co/400x400" alt="Main product image" className="rounded-lg mb-2" />
        </div>

      </div>

      <div className="md:w-1/2 md:pl-8">
        <h1 className="text-2xl font-semibold text-foreground mb-2">Glamorous Floral Diamond Stud Earrings</h1>
        {/* <div className="flex items-center mb-2">
          <div className="flex space-x-1 text-primary">
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
          </div>
          <a href="#" className="ml-2 text-sm text-muted-foreground hover:text-primary">
            Write a review
          </a>
        </div> */}
        <p className="text-muted-foreground mb-4">Spruce up your outfit with these floral diamond stud earrings crafted in yellow gold in high finish. Stone Quality: 11/12 G-H</p>
        <div className="text-xl font-bold text-foreground mb-2">₹34,245</div>
        <p className="text-sm text-muted-foreground mb-4">
          Price Inclusive of all taxes. See full{' '}
          <a href="#" className="text-primary">
            Price Breakup
          </a>
        </p>

        <div className="flex space-x-4 mb-4">
          <div>
            <label htmlFor="weight" className="block text-sm text-muted-foreground">
              Gross Weight
            </label>
            <select id="weight" className="border border-input rounded px-2 py-1">
              <option>2.153 g</option>
            </select>
          </div>
          <div>
            <label htmlFor="quantity" className="block text-sm text-muted-foreground">
              Qty
            </label>
            <div className="flex items-center border border-input rounded">
              <button className="px-2 py-1">-</button>
              <input type="number" id="quantity" value="1" className="w-12 text-center border-none" />
              <button className="px-2 py-1">+</button>
            </div>
          </div>
        </div>

        <div className="text-sm text-muted-foreground mb-4">
          <p>Gold Purity: 18 Karat</p>
          <p>Diamond weight: 0.137 c</p>
          <a href="#" className="text-primary">
            Not sure what to buy? Check out our Buying Guides
          </a>
        </div>

        <div className="flex space-x-4 mb-4">
          <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded">Add to Cart</button>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded">Buy Now</button>
        </div>

        <div className="flex space-x-4">
          <div>
            <label htmlFor="country" className="block text-sm text-muted-foreground">
              Country
            </label>
            <select id="country" className="border border-input rounded px-2 py-1">
              <option>India</option>
            </select>
          </div>
          <div>
            <label htmlFor="pincode" className="block text-sm text-muted-foreground">
              Pincode
            </label>
            <input type="text" id="pincode" className="border border-input rounded px-2 py-1" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductPage