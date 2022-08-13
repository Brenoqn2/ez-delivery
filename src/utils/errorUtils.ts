type AppErrorTypes = "conflict" | "not_found" | "unauthorized" | "wrong_schema";

export interface AppError {
  type: AppErrorTypes;
  message: string;
}

export function isAppError(error: object): error is AppError {
  return (error as AppError).type !== undefined;
}

export function errorStatusCode(type: AppErrorTypes) {
  switch (type) {
    case "conflict":
      return 409;
    case "not_found":
      return 404;
    case "unauthorized":
      return 401;
    case "wrong_schema":
      return 422;
  }
}

export function conflictError(message?: string): AppError {
  return { type: "conflict", message: message ?? "" };
}

export function notFoundError(message?: string): AppError {
  return { type: "not_found", message: message ?? "" };
}

export function unauthorizedError(message?: string): AppError {
  return { type: "unauthorized", message: message ?? "" };
}

export function wrongSchemaError(message?: string): AppError {
  return { type: "wrong_schema", message: message ?? "" };
}
