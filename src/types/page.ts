export interface Page {
    ident: string,
    name: string,
    graphicUrl: string,
    text: string,
  }

  export interface TreeNode {
    name: string;
    children?: TreeNode[];
    expanded?: boolean;
  }