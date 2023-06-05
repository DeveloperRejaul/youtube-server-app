import multer from "multer";

const storage = multer.diskStorage({
  destination: function (_req: any, file: any, cb: any) {
    cb(null, "src/uploads");
  },
  filename: function (_req: any, file: any, cb: any) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});
const upload: any = multer({ storage: storage });
export default upload;
