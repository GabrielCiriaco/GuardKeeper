export interface LoginResponse {
  avatar: string;
  nome: string;
  token: string;
  conteudos: Array<number>;
  isAdmin: boolean;
  permissionSubgrupo: Array<number>;
  permissionCharts: Array<{ id_conteudo: number; nome: Array<string> }>;
}
