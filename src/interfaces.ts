export interface IFile {
  id: string; // Unique identifier of file
  name: string; // Name of the file
}

export interface IFolder {
  id: string; // Unique identifier of folder
  name: string; // Name of the folder
  files: IFile[]; // Files in this folder
}
