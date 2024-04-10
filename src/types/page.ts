export interface Page {
    ident: string;
    name: string;
    body: string;
    graphicUrl: string;
    text: string;
    isActive: boolean;
  }

export interface TreeNode {
  ident: string;
  name: string;
  children?: TreeNode[];
  expanded?: boolean;
}