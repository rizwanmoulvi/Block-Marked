import { setDoc} from "@junobuild/core";
import { nanoid } from "nanoid";
import { useContext, useEffect,  useState } from "react";
import { AuthContext } from "./Auth";
import { Backdrop } from "./Backdrop";
import { Button } from "./Button";

export const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputText, setInputText] = useState("");
  const [valid, setValid] = useState(false);
  const [progress, setProgress] = useState(false);


  const { user } = useContext(AuthContext);

  useEffect(() => {
    setValid(inputText !== "" && user !== undefined && user !== null);
  }, [showModal, inputText, user]);

  const reload = () => {
    let event = new Event("reload");
    window.dispatchEvent(event);
  };

  const add = async () => {
    // Demo purpose therefore edge case not properly handled
    if ([null, undefined].includes(user)) {
      return;
    }

    setProgress(true);

    try {
      let url;

      const key = nanoid();

      await setDoc({
        collection: "notes",
        doc: {
          key,
          data: {
            text: inputText,
            ...(url !== undefined && { url }),
          },
        },
      });

      setShowModal(false);

      reload();
    } catch (err) {
      console.error(err);
    }

    setProgress(false);
  };

  return (
    <>
      <Button onClick={() => setShowModal(true)}>
        Enter Site Link{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 -960 960 960"
          width="20"
          fill="currentColor"
        >
          <path d="M417-417H166v-126h251v-251h126v251h251v126H543v251H417v-251Z" />
        </svg>
      </Button>

      {showModal ? (
        <>
          <div
            className="fixed inset-0 z-50 p-16 md:px-24 md:py-44 animate-fade"
            role="dialog"
          >
            <div className="relative w-full max-w-2xl">
              <textarea
                className="
                form-control
                block
                w-full
                h-32
                px-3
                py-1.5
                text-base
                font-normal
                m-0
                resize-none
                border-black border-[3px] rounded-sm bg-white shadow-[5px_5px_0px_rgba(0,0,0,1)]
                focus:outline-none
            "
                rows={7}
                placeholder="Enter Site Link To Book Mark Site"
                onChange={(e) => {
                  setInputText(e.target.value);
                }}
                value={inputText}
                disabled={progress}
              ></textarea>

              {progress ? (
                <div
                  className="my-8 animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-indigo-600 rounded-full"
                  role="status"
                  aria-label="loading"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <div className="flex my-4">
                  <button
                    className="py-1 px-8 hover:text-rose-600 active:text-rose-400"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>

                  <Button onClick={add} disabled={!valid}>
                    Submit
                  </Button>
                </div>
              )}
            </div>
          </div>
          <Backdrop />
        </>
      ) : null}
    </>
  );
};
