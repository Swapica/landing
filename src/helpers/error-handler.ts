import log from 'loglevel'

export class ErrorHandler {
  static process(error: Error | unknown): void {
    ErrorHandler.processWithoutFeedback(error)
  }

  static processWithoutFeedback(error: Error | unknown): void {
    log.error(error)
  }
}
