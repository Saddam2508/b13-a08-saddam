import { Tile } from "@/types/tile";
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

const AllTilesCard = ({ tile }: { tile: Tile }) => {
  return (
    <div>
      <Card className=" gap-2 group cursor-pointer">
        <div className="relative w-full aspect-square">
          <Image
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            alt="Indie Hackers community"
            className="pointer-events-none aspect-square w-14 rounded-2xl object-cover select-none"
            loading="lazy"
            src={tile.image}
          />
          <Chip className="absolute top-2 right-2"> {tile.category} </Chip>
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100">
            <Chip className="flex items-center gap-2 text-white bg-black/70 backdrop-blur-md px-4 py-2">
              <FaHeart className="text-red-500" />
              Favorite
            </Chip>
          </div>
          <Link
            href={`/all-tiles/${tile.id}`}
            className="absolute right-2  bottom-2 opacity-0 transition duration-300 group-hover:opacity-100"
          >
            <Button>View Details</Button>
          </Link>
        </div>
        <Card.Header> {tile.title} </Card.Header>
      </Card>
    </div>
  );
};

export default AllTilesCard;
