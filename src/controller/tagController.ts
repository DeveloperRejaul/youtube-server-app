import { Request, Response } from "express";
const createTagController = async (req: Request, res: Response) => {
  const { tags } = req.body;
  res.send({ tags });
};
const deleteTagController = async (req: Request, res: Response) => {};
const getTagController = async (req: Request, res: Response) => {};
const updateTagController = async (req: Request, res: Response) => {};

export = {
  createTagController,
  deleteTagController,
  getTagController,
  updateTagController,
};
