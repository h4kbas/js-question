import { IFile, IFolder } from './interfaces';

type List = IFolder[];

export default function move(list: List, source: string, destination: string): List {
  // To keep the objects of given IDs after finding them
  let src: IFile | undefined;
  let dest: IFolder | undefined;

  if (!list.length) {
    throw new Error('List is empty');
  }

  list.forEach((folder) => {
    // throws error if given source is not a file
    if (folder.id === source) {
      throw new Error('You cannot move a folder');
    }

    if (folder.id === destination) {
      dest = folder;
    }

    folder.files.forEach((file, i) => {
      if (file.id === destination) {
        throw new Error('You cannot specify a file as the destination');
      }

      if (file.id === source) {
        src = file;
        // Remove the file because you will move it to another folder
        folder.files.splice(i, 1);
      }
    });
  });
  // Complete move
  if (!dest) {
    throw new Error('Destination folder does not exist');
  }
  if (!src) {
    throw new Error('Source file does not exists');
  }
  dest.files.push(src);
  return list;
}
