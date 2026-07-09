/**
 * React utility functions for formatting, class merging, and common operations
 */

/**
 * Merge Tailwind CSS classes with clsx and tailwind-merge
 * Requires clsx and tailwind-merge as peer dependencies
 */
export function cn(...inputs: any[]): string {
  // This is a placeholder - users should install clsx and tailwind-merge
  // and use: twMerge(clsx(inputs))
  return inputs.filter(Boolean).join(' ')
}

/**
 * Format a number as currency
 */
export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

/**
 * Format a number with K/M suffixes
 */
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

/**
 * Format a number as percentage
 */
export function formatPercentage(num: number): string {
  return `${(num * 100).toFixed(2)}%`
}

/**
 * Format latency in milliseconds
 */
export function formatLatency(ms: number): string {
  if (ms < 1000) {
    return `${ms.toFixed(0)}ms`
  }
  return `${(ms / 1000).toFixed(1)}s`
}

/**
 * Generate a unique signal ID
 */
export function generateSignalId(): string {
  return crypto.randomUUID()
}

/**
 * Calculate ROI as percentage
 */
export function calculateROI(profit: number, investment: number): number {
  return (profit / investment) * 100
}

/**
 * Get time ago string from timestamp
 */
export function getTimeAgo(timestamp: number): string {
  const now = Date.now()
  const diff = now - timestamp
  
  if (diff < 1000) return 'just now'
  if (diff < 60000) return `${Math.floor(diff / 1000)}s ago`
  if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`
  return `${Math.floor(diff / 86400000)}d ago`
}

/**
 * Validate if a string is a valid hex API key (40 hex characters)
 */
export function isValidApiKey(key: string): boolean {
  return /^[a-f0-9]{40}$/.test(key)
}

/**
 * Mask an API key for display
 */
export function maskApiKey(key: string): string {
  if (key.length < 8) return key
  return key.slice(0, 4) + '...' + key.slice(-4)
}

/**
 * Truncate a string to a maximum length
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str
  return str.slice(0, maxLength) + '...'
}

/**
 * Format a blockchain address for display
 */
export function formatAddress(address: string, length = 6): string {
  if (address.length <= length * 2) return address
  return `${address.slice(0, length)}...${address.slice(-length)}`
}

/**
 * Format a hash for display
 */
export function formatHash(hash: string, length = 8): string {
  return formatAddress(hash, length)
}

/**
 * Sleep for a specified duration
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Debounce a function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Throttle a function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}
