"use client";
import { currentUser } from "@/services/apiService";
import { Button, Skeleton } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const Profile = ({ params: { userId } }: { params: { userId: string } }) => {
  const [user, setUser] = useState<{ username: any; email: any } | null>(null);
  const [loading, setLoading] = useState(true);

  const current = async () => {
    try {
      const res = await currentUser();
      setUser(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    current();
  }, []);
  return (
    <div>
      <div>
        {loading ? (
          <div className="flex items-center space-x-4 p-4 py-8 mt-10">
            <Skeleton className="h-20 w-20 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ) : (
          <div className="dark:bg-zinc-900 bg-zinc-100 p-4 py-8 rounded-xl">
            <div className="mt-4 flex  items-center gap-4">
              <div className="flex justify-center items-center h-20 w-20 dark:bg-zinc-800 bg-zinc-300 rounded-full font-bold uppercase tracking-wide">
                {user?.username}
              </div>
              <div>
                <div className="flex gap-2">
                  <h1 className="dark:text-zinc-400 text-zinc-600">User Name :</h1>{" "}
                  <span className="tracking-wider">{user?.username}</span>
                </div>
                <div className="flex gap-2">
                  <h1 className="dark:text-zinc-400 text-zinc-600">Email :</h1>{" "}
                  <span className="tracking-wider">{user?.email}</span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <Button
                variant="shadow"
                color="primary"
                className="font-semibold tracking-wide"
              >
                Edit Profile
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
