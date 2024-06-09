import NProgress from "nprogress";
import { useEffect, useMemo } from "react";
import "./ProgressBars.css";
import "nprogress/nprogress.css";

export const ProgressBar = () => {
  NProgress.configure({
    showSpinner: false,
  });

  useMemo(() => {
    NProgress.start();
  }, []);

  useEffect(() => {
    NProgress.done();
  }, []);

  return null;
};
