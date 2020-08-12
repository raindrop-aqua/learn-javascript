export class Task {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;

  constructor(
    id: string,
    title: string,
    created_at: string,
    updated_at: string
  ) {
    this.id = id;
    this.title = title;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
