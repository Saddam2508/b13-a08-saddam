"use client";
import React from "react";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import { Tile } from "@/types/tile";
import { Star } from "lucide-react";
import { MdArrowBackIos } from "react-icons/md";
import Link from "next/link";

const DetailsCard = ({ selectedTile }: { selectedTile: Tile }) => {
  return (
    <div className="mt-20 container mx-auto">
      <Card className="grid grid-cols-1 md:grid-cols-2 p-5 gap-5 sm:gap-10">
        <div className="relative aspect-square rounded-2xl h-[30vh] sm:h-[50vh] md:h-[70vh] sm:w-150 sm:mx-auto md:w-full">
          <Image
            alt="Cherries"
            className="object-cover aspect-square rounded-2xl"
            loading="lazy"
            fill
            src={selectedTile.image}
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-1 items-center">
            <MdArrowBackIos />
            <Link href={"/all-tiles"}>Back to All Tiles</Link>
          </div>
          <hr className="border-t border-gray-300 my-6" />
          <Card.Header className="gap-5">
            <Card.Title className="pr-8 text-2xl sm:text-3xl">
              {selectedTile.title}
            </Card.Title>
            <Card.Description>
              {" "}
              {selectedTile.inStock ? "In Stock" : "Out of stock"}
            </Card.Description>
          </Card.Header>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={20}
                className={
                  star <= Math.round(selectedTile.rating)
                    ? "fill-orange-400 text-orange-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
          <Card.Description>{selectedTile.description}</Card.Description>
          <Card.Description>
            Dimensions : {selectedTile.dimensions}
          </Card.Description>
          <Card.Description className="text-[1.75rem] sm:text-4xl font-bold mt-2">
            Price : {selectedTile.price} {selectedTile.currency}
          </Card.Description>
          <hr className="border-t border-gray-300 my-6" />
          <div className="flex gap-1 text-gray-400">
            Category : {selectedTile.category} -tags:
            {selectedTile.tags.map((tag, i) => (
              <p key={i}> {tag},</p>
            ))}
          </div>
          <Card.Description>
            {" "}
            Creator by : {selectedTile.creator}{" "}
          </Card.Description>
          <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">
                Only 20 spots
              </span>
              <span className="text-xs text-muted">
                Submission ends Oct 10.
              </span>
            </div>
            <Button className="w-full sm:w-auto">Add to Cart</Button>
          </Card.Footer>
        </div>
      </Card>
    </div>
  );
};

export default DetailsCard;
