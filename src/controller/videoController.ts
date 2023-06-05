import { Video } from "../model/video";
import { getVideoDurationInSeconds } from "get-video-duration";
import convertSecondsToTime from "../utils/convertSecondsToTime";
import { Request, Response } from "express";

export const createVideoController = async (req: any, res: Response) => {
  try {
    const { title, author } = req.body;
    const url = req.protocol + "://" + req.get("host") + "/";
    const thumbLine = url + req.files[0].filename;
    const video = url + req.files[1].filename;
    const avatar = url + req.files[2].filename;
    const seconds = await getVideoDurationInSeconds(video);
    const duration = convertSecondsToTime(Number(seconds));
    const newVideo = await Video.create({
      title,
      thumbLine,
      video,
      avatar,
      author,
      duration,
    });
    await res.status(200).send(newVideo);
  } catch (error) {
    console.log(error);
  }
};

export const deleteVideoController = async (req: Request, res: Response) => {};
export const getVideoController = async (req: Request, res: Response) => {};
export const updateVideoController = async (req: Request, res: Response) => {};
