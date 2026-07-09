# React Utils

React utility functions for formatting, class merging, and common operations.

## Features

- Currency and number formatting
- Time and latency formatting
- Address and hash formatting
- API key validation and masking
- Debounce and throttle utilities
- Common string operations

## Usage

```typescript
import {
  formatCurrency,
  formatNumber,
  formatPercentage,
  formatLatency,
  formatAddress,
  formatHash,
  getTimeAgo,
  debounce,
  throttle
} from '@orkid-labs/react-utils'

formatCurrency(1234.56) // "$1,234.56"
formatNumber(1500000) // "1.5M"
formatPercentage(0.0523) // "5.23%"
formatLatency(1500) // "1.5s"
formatAddress("0x1234567890abcdef", 6) // "0x1234...cdef"
formatHash("0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef", 8) // "0x12345678...cdef"
getTimeAgo(Date.now() - 3600000) // "1h ago"
```

## Peer Dependencies

- `clsx` (optional, for `cn` function)
- `tailwind-merge` (optional, for `cn` function)

## License

MIT
