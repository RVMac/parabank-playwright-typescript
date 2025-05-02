export class ScenarioContext {
  private context: Map<string, any>;

  constructor() {
    this.context = new Map<string, any>();
  }

  public set(key: string, value: any): void {
    this.context.set(key, value);
  }

  public get<T>(key: string): T | undefined {
    return this.context.get(key) as T;
  }

  public has(key: string): boolean {
    return this.context.has(key);
  }
}