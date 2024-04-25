import { listDocs } from "@junobuild/core";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Auth";
import { Delete } from "./Delete";

export const Table = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    window.addEventListener("reload", list);

    return () => {
      window.removeEventListener("reload", list);
    };
  }, []);

  const list = async () => {
    const { items } = await listDocs({
      collection: "notes",
      filter: {},
    });

    setItems(items);
  };

  useEffect(() => {
    if ([undefined, null].includes(user)) {
      setItems([]);
      return;
    }

    (async () => await list())();
  }, [user]);

  return (
    <div className="w-full max-w-2xl mt-8 dark:text-white " role="table">
      <div className="text-6xl font-black mb-5" role="row">
        <span role="columnheader" aria-sort="none">
          Book Marks
        </span>
      </div>

      <div className="py-2" role="rowgroup">
        {items.map((item) => {
          const {
            key,
            data: { text },
          } = item;

          return (
            <div
              key={key}
              className="flex items-center gap-2 px-3 mb-4 border-black dark:border-rose-600 border-[3px] rounded bg-white dark:bg-black dark:text-white transition-all shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_#fda4af]"
              role="row"
            >
              
              <div
                role="cell"
                className="line-clamp-3 overflow-hidden grow text-rose-600 text-xl py-2"
              >
                <a href={text} className="hover:text-rose-300 font-bold tracking-wider">
                  {text}
                </a>
              </div>
              <div
                role="cell"
                className="flex gap-2 justify-center align-middle"
              >
                <Delete item={item} reload={list} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
