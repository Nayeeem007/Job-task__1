import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

const Review = () => {
  return ( 
     <div>
        <h2 className="text-3xl font-semibold text-center my-5 text-yellow-600">College Reviews And Ratings</h2>
    <div className="flex gap-3 border-collapse">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Swarthmore College</h2>
          <p>
            {" "}
            Renowned for rigorous academics and social responsibility,
            Swarthmore provides a supportive campus near Philadelphia,
            emphasizing diversity and inclusive initiatives.
          </p>
          <div className="flex justify-between items-center">
            <div className="flex">
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStarHalf></FaStarHalf>
            </div>
            <div>
              <p>
                Rating: <span className="text-yellow-600">4.5</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Amherst College</h2>
          <p>
            {" "}
            A top-tier liberal arts college in Massachusetts, known for its
            intimate classes, distinguished faculty, and a strong focus on
            intellectual curiosity.
          </p>
          <div className="flex justify-between items-center">
            <div className="flex">
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStarHalf></FaStarHalf>
            </div>

            <div>
              <p>
                Rating: <span className="text-yellow-600 ">4.5</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Pomona College:</h2>
          <p>
            Located in sunny California, Pomona College offers a top-notch
            liberal arts education with a close-knit community and a wealth of
            academic opportunities.{" "}
          </p>
          <div className="flex justify-between items-center">
            
              <div className="flex">
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStarHalf></FaStarHalf>
              </div>
            
            <div>  <p>
                Rating: <span className="text-yellow-600 ">4.5</span>
              </p></div>
        
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Yale University</h2>
          <p>
            An Ivy League institution in Connecticut, renowned for its academic
            excellence, accomplished faculty, and a history of producing
            influential leaders in various fields.
          </p>
          <div className="flex justify-between items-center">
            <div className="flex">
                <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar></div>
            <div className="flex  justify-between">
              <div className="flex">
               <div> <p>
                  Rating <span className="text-yellow-600">4</span>
                </p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Review;
