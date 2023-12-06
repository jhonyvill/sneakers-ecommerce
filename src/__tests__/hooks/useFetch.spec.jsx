import { renderHook, act, waitFor } from "@testing-library/react";
import { useFetch } from "../../hooks/useFetch";
import { productDefault } from "../../../.jest/utils";

const successResolver = {
  ok: true,
  json: () => Promise.resolve(productDefault),
};

const errorMessage = "invalid request";
const errorResolver = {
  ok: false,
  json: () => Promise.resolve({ message: errorMessage }),
};

const defineGlobalFetch = (resolver) => {
  global.fetch = jest.fn(() => Promise.resolve(resolver));
};

describe("useFetch", () => {
  it("should return correct value", async () => {
    defineGlobalFetch(successResolver);
    const { result } = renderHook(() => useFetch());
    await waitFor(() =>
      act(async () => await result.current.request("./data.json"))
    );

    expect(result.current.error).toBeNull();
    expect(result.current.loading).toBe(false);
    expect(result.current.data).not.toBeNull();
    expect(result.current.data).toBe(productDefault);
  });

  it("should throw error when response to fail", async () => {
    defineGlobalFetch(errorResolver);
    const { result } = renderHook(() => useFetch());

    await waitFor(() =>
      act(async () => await result.current.request("./data.json"))
    );

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(false);
    expect(result.current.error).not.toBeNull();
    expect(result.current.error).toBe(errorMessage);
  });
});
