import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  //we will see our cart is empty or non empty with the help of initial state that we have set as 0 in slice
  const { cart } = useSelector((state) => state);

  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);


  //jab bhi cart me kuch changes hoga toh totalAmount ki value bhi change hogi
  //so cart array is the dependency of the amount

//   The reduce() method in JavaScript applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

// array.reduce(callback(accumulator, currentValue)=>acc+curr, initialValue)) or we can perform anyoperations

// callback - Function to execute on each value in the array

// accumulator - The accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.

// currentValue - The current element being processed in the array.


// initialValue - Value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used.
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div >
      {cart.length > 0 ? (
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center mb-6">
          <div className="w-[100%] md:w-[60%] flex flex-col p-2">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="w-[100%] md:w-[40%] mt-0  flex flex-col">
            <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between">
            <div className="flex flex-col gap-5 ">
            <div className="font-semibold text-xl text-green-800 ">Your Cart</div>
              <div className="font-semibold text-5xl text-green-700  -mt-5">Summary</div>
              <p className="text-xl">
                <span className="text-gray-700 font-semibold text-xl">Total Items: {cart.length}</span>
              </p>
            </div>
            </div>

            <div className="flex flex-col">
              <p className="text-xl font-bold"><span className="text-gray-700 font-semibold">Total Amount:</span> ${totalAmount}</p>
              <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">CheckOut Now</button>
            </div>
          </div>
        </div>
      )  
      :  (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">
            Your cart is empty!
          </h1>
          <Link to={"/"}>
            <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
              Shop Now
            </button>
          </Link>
        </div>
      )
    }
    </div>
  );
};

export default Cart;