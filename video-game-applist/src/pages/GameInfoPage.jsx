import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GameContext } from "../context/GameContext";
import loadingScreen from "../assets/loading_ac.gif";

const GameInfoPage = () => {
  const { id } = useParams();
  const { getGameDetails, addReview, deleteReview, updateReview } =
    useContext(GameContext);
  const [game, setGame] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [selectedReview, setSelectedReview] = useState(null);
  const [editReviewContent, setEditReviewContent] = useState("");

  useEffect(() => {
    const fetchGameAndReviews = async () => {
      const gameData = await getGameDetails(id);
      setGame(gameData);
      setReviews(gameData.reviews || []);
    };
    fetchGameAndReviews();
  }, [id, getGameDetails]);

  const handleAddReview = async (e) => {
    e.preventDefault();
    if (newReview.trim() !== "") {
      const newReviewData = {
        gameId: game.id,
        content: newReview,
      };
      await addReview(newReviewData);
      setReviews([...reviews, newReviewData]);
      setNewReview("");
    }
  };

  const handleDeleteReview = async (reviewId) => {
    await deleteReview(reviewId);
    setReviews(reviews.filter((review) => review.id !== reviewId));
  };

  const handleSelectReview = (review) => {
    setSelectedReview(review);
    setEditReviewContent(review.content);
  };

  const handleEditReviewButton = async (review) => {
    setSelectedReview(review);
    setEditReviewContent(review.content);
  };

  const handleEditReviewForm = async (e) => {
    e.preventDefault();
    const updatedReview = {
      id: selectedReview.id,
      content: editReviewContent,
    };
    await handleUpdateReview(selectedReview.id, updatedReview);
    setEditReviewContent("");
    setSelectedReview(null);
  };

  const handleUpdateReview = async (reviewId, updatedReview) => {
    await updateReview(reviewId, updatedReview);
    const updatedGame = await getGameDetails(reviewId);
    setReviews(
      reviews.map((review) => (review.id === reviewId ? updatedReview : review))
    );
  };

  if (!game)
    return (
      <div className="w-full h-screen bg-red-50 flex items-center justify-center text-4xl font-semibold">
        <img src={loadingScreen} width={1000} height={500} alt="loading screen" />
      </div>
    );

  return (
    <div>
      <h1 className="px-32 text-5xl uppercase font-bold my-8">{game.name}</h1>
      <img
        className="w-full max-h-[85vh] object-cover rounded-lg"
        src={game.background_image}
        alt={game.name}
      />
      <div className="px-32">
        <h3 className="mt-4 text-[22px] font-bold">Description:</h3>
        <p
          className="max-w-3xl pt-5 pb-12"
          dangerouslySetInnerHTML={{ __html: game.description }}
        />
      </div>
      <div className="px-32">
        <h3 className="mt-2 text-[22px] font-bold pb-12">Released in: {game.released}</h3>
      </div>
      <div className="px-32">
        <h3 className="mt-2 text-[22px] font-bold pb-12">Developped by: {game.developers[0].name}</h3>
      </div>
      <div className="px-32">
        <h3 className="mt-2 text-[22px] font-bold pb-12">Available on: {game.platforms[0].platform.name} / {game.platforms[1].platform.name} / {game.platforms[2].platform.name}</h3>
      </div>

      <div className="px-32 pb-12">
        <h1 className="text-2xl font-semibold pb-3 mb-8 border-b border-slate-800">
          Game Reviews ({reviews && reviews.length})
        </h1>
        {selectedReview ? (
          <form onSubmit={handleEditReviewForm} className="mb-8 max-w-lg">
            <textarea
              type="text"
              placeholder="Edit Review"
              value={editReviewContent}
              onChange={(e) => setEditReviewContent(e.target.value)}
              className="border p-2 w-full mb-2"
            />
            <button
              type="submit"
              className="bg-blue-500 px-5 py-2.5 rounded-lg font-semibold"
            >
              Update Review
            </button>
          </form>
        ) : (
          <form onSubmit={handleAddReview} className="mb-8 max-w-lg">
            <textarea
              type="text"
              placeholder="Leave a review"
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              className="border p-2 w-full mb-2"
            />
            <button
              type="submit"
              className="bg-blue-500 px-5 py-2.5 rounded-lg font-semibold hover:text-white transition-all ease-out duration-300"
            >
              Submit Review
            </button>
          </form>
        )}

        <div className="max-w-3xl relative">
          {reviews.map((review, index) => (
            <div key={index} className="relative w-full border p-2 mb-2">
              <button
                className="absolute right-1 top-1.5 "
                onClick={() => handleDeleteReview(review.id)}
              >
                🗑️
              </button>
              <p className="max-w-2xl">{review.content}</p>
              <button
                className=" absolute right-8 top-1.5 bg-blue-500 px-2 py-[2px] rounded-md font-semibold"
                onClick={() => handleEditReviewButton(review)}
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameInfoPage;
