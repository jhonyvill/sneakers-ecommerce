import { renderHook, act } from '@testing-library/react';
import { useProductPrice } from '../../hooks/useProductPrice'

describe("useProductPrice", () => {
  it("should return the correct value", () => {
    const { result } = renderHook(() => useProductPrice(250, 0.5));
    expect(result.current.price).toBe('250.00')
    expect(result.current.finalPrice).toBe('125.00')
    expect(result.current.discountPercent).toBe(50)
    expect(result.current.hasDiscount).toBe(true)
  });

  it("should return the correct value without discount", () => {
    const { result } = renderHook(() => useProductPrice(250, 0));
    expect(result.current.price).toBe('250.00')
    expect(result.current.finalPrice).toBe('250.00')
    expect(result.current.discountPercent).toBe(0)
    expect(result.current.hasDiscount).toBe(false)
  });
  
  it("should return the correct total items price value ", () => {
    const { result } = renderHook(() => useProductPrice(250, 0));
    let totalItemPrice;
    act(() => {
      totalItemPrice = result.current.getTotalItemPrice(2);
    })

    expect(totalItemPrice).toBe('500.00');
  });
});