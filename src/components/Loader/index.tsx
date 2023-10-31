import { createPortal } from "react-dom";
import { SyncLoader } from "react-spinners";
import { CSSProperties } from "styled-components";

export default function Loader() {
  const override: CSSProperties = {
    opacity: 0.7,
  };

  const el = document.getElementById("loader");
  return (
    el &&
    createPortal(<SyncLoader cssOverride={override} color="#d9d9d9" />, el)
  );
}
